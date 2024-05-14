import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import PlanCard from '../plans/PlanCard';
import { useNavigate } from 'react-router-dom';
import states from 'states-us'
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer'
import ActivityIndicator from '../../components/shared/ActivityIndicator';
import useContacts from '../../hooks/useContacts';

const Plans = () => {
    const navigate = useNavigate()
    const [leadData, setLeadData] = useState(null)
    const [ref, isInView] = useInView()

    const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['plans'],
        queryFn: async ({ pageParam = 0 }) => {
            const req = await fetch("https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=" + process.env.REACT_APP_API_KEY, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...leadData,
                    offset: pageParam
                })
            })
            return (await req.json())
        },
        enabled: (leadData !== null),
        getNextPageParam: (_lastPage, allPages) => (allPages[0].total) > (allPages.flatMap(page => page.plans).length) ? allPages.flatMap(page => page.plans).length : undefined
    })

    const { getContact } = useContacts()
    
    useEffect(() => {
        const fetchData = async () => {
            const uuid = localStorage.getItem('uuid')
            if (!uuid) return navigate('/')
            let lead = await getContact(uuid)

            let countyfips
            try {
                const response = await fetch(
                    `https://marketplace.api.healthcare.gov/api/v1/counties/by/zip/${lead.details.zip}?apikey=${process.env.REACT_APP_API_KEY}`
                )
                const data = await response.json()

                if (data.error) {
                    console.error('Error fetching countyfips:', data.error)
                    return
                }

                if (data.counties.length === 0) {
                    console.error('No counties found for the provided ZIP code')
                    return
                }

                countyfips = data.counties[0].fips
            } catch (error) {
                console.error('Error fetching countyfips:', error)
            }
            const hasMarriedCouple = ['family', 'couple'].includes(lead.type)

            const parsedData = {
                household: {
                    income: lead.details.gross_income * 12,
                    has_married_couple: hasMarriedCouple,
                    people: [
                        dataToPeople({ ...lead.details, relationship: 'Self' }),
                        ...(hasMarriedCouple
                            ? [
                                  dataToPeople({
                                      ...lead.spouse_details,
                                      relationship: 'Spouse',
                                  }),
                              ]
                            : []),
                        ...(lead?.dependents
                            ? lead?.dependents.map(dependent =>
                                  dataToPeople(dependent)
                              )
                            : []),
                    ].filter(Boolean),
                },
                market: 'Individual',
                place: {
                    countyfips: countyfips,
                    state: states.find(s => s.name === lead.details.state)
                        ?.abbreviation,
                    zipcode: lead.details.zip.toString(),
                },
            }
            setLeadData(parsedData)
        }
        fetchData()
    }, [navigate]);

    useEffect(() => {
        if (isLoading || leadData === null || !isInView) return
        fetchNextPage()
    }, [fetchNextPage, isInView, isLoading, leadData])

    const dataToPeople = ({ dob, gender, relationship, uses_tobacco }) => ({
        dob: dob.split('T')[0],
        gender: gender.charAt(0).toUpperCase() + gender.slice(1),
        relationship,
        aptc_eligible: true,
        uses_tobacco,
    })

    return (
        <Layout>
            {(leadData !== null && data?.pages.length > 0) && (
                <div className='w-11/12 lg:w-3/4 mx-auto space-y-8'>
                    {data.pages[0].plans ? (
                        <>
                            <h4 className="text-base font-thin text-dark">
                                We have found
                                <span className='text-base text-secondary font-normal mx-1'>{data.pages[0]?.total}</span>
                                plans matching your profile!
                            </h4>
                            {data.pages.map((page, pageIndex) => (
                                <React.Fragment key={pageIndex}>
                                    {page.plans?.map((plan, itemIndex) => (
                                        <PlanCard key={itemIndex} plan={plan} />
                                    ))}
                                </React.Fragment>
                            ))}
                        </>
                    ) : (
                        <div>No Plans found</div>
                    )}
                </div>
            )}
            {(hasNextPage || leadData === null || isLoading) && (
                <div className='pt-4'>
                    <ActivityIndicator
                        ref={ref}
                        width={24}
                        height={24}
                        spinnerClass={'text-secondary'}
                        backgroundClass={'text-gray-300 animate-spin'}
                    />
                </div>
            )}
        </Layout>
    );
}

export default Plans;