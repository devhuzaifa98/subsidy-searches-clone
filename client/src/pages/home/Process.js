import React from "react";
import useSmoothScroll from "../../hooks/useSmoothScoll";

const STEPS = [
  {
    title: "Complete the form",
    description: "Fill out the required information in the form to proceed.",
  },
  {
    title: "Evaluation",
    description: "Your information will be evaluated to determine eligibility.",
  },
  {
    title: "GET A $0 HEALTH INSURANCE PREMIUM",
    description:
      "If eligible, enjoy the benefits of a health insurance premium with no cost.",
  },
];

const Process = () => {
  const { scrollToTop } = useSmoothScroll();

  return (
    <section
      id="process"
      className="flex flex-col justify-center items-center bg-transparent text-gray-700 gap-y-10 py-10 relative z-0"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bottom-0 left-0 absolute -z-10"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="a" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stop-color="rgba(243, 106, 62, 1)" />
              <stop offset="100%" stop-color="rgba(255, 179, 11, 1)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            d="m0 128 40 5.3C80 139 160 149 240 144s160-27 240-5.3c80 21.3 160 85.3 240 112 80 26.3 160 16.3 240-5.4 80-21.3 160-53.3 240-69.3s160-16 240-5.3c80 10.3 160 32.3 240 5.3 80-27 160-101 240-138.7C2000 0 2080 0 2160 16c80 16 160 48 240 53.3 80 5.7 160-16.3 240 16 80 31.7 160 117.7 240 128 80 10.7 160-53.3 240-74.6 80-21.7 160 .3 240 16 80 16.3 160 26.3 240 26.6 80-.3 160-10.3 240-10.6 80 .3 160 10.3 240-5.4 80-16.3 160-58.3 240-58.6 80 .3 160 42.3 240 69.3s160 37 240 37.3c80-.3 160-10.3 240-5.3 80 5 160 27 240 21.3 80-5.3 160-37.3 240-80 80-42.3 160-96.3 200-122.6L5760 0v320H0Z"
          />
        </svg>{" "}
      </div>
      <h1 className="text-6xl font-bold">How It Works</h1>
      <h1 className="text-3xl">
        Eligibility for a complimentary health plan is based on household
        income.
      </h1>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary">
          If your income falls within the blue bracket, you qualify.
        </h1>
        <h1 className="text-4xl">Don't wait, submit the form now!</h1>
        <table className="border-spacing-1 border-separate">
          <thead>
            <tr>
              <th class="px-24 py-1.25">Family Size</th>
              <th class="px-24 py-1.25 bg-primary">100%</th>
              <th class="px-24 py-1.25 bg-primary">150%</th>
              <th class="px-24 py-1.25">200%</th>
              <th class="px-24 py-1.25">400%</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center spacing-y-3">
              <td class="px-24 py-1.25">1</td>
              <td class="px-24 py-1.25 bg-primary">$14,580</td>
              <td class="px-24 py-1.25 bg-primary">$21,870</td>
              <td class="px-24 py-1.25">$29,160</td>
              <td class="px-24 py-1.25">$58,320</td>
            </tr>
            <tr className="text-center bg-gray-200">
              <td class="px-24 py-1.25">2</td>
              <td class="px-24 py-1.25 bg-primary">$19,720</td>
              <td class="px-24 py-1.25 bg-primary">$29,580</td>
              <td class="px-24 py-1.25">$39,440</td>
              <td class="px-24 py-1.25">$78,880</td>
            </tr>
            <tr className="text-center">
              <td class="px-24 py-1.25">3</td>
              <td class="px-24 py-1.25 bg-primary">$24,860</td>
              <td class="px-24 py-1.25 bg-primary">$37,290</td>
              <td class="px-24 py-1.25">$49,720</td>
              <td class="px-24 py-1.25">$99,440</td>
            </tr>
            <tr className="text-center bg-gray-200">
              <td class="px-24 py-1.25">4</td>
              <td class="px-24 py-1.25 bg-primary">$30,000</td>
              <td class="px-24 py-1.25 bg-primary">$45,000</td>
              <td class="px-24 py-1.25">$60,000</td>
              <td class="px-24 py-1.25">$120,000</td>
            </tr>
            <tr className="text-center">
              <td class="px-24 py-1.25">5</td>
              <td class="px-24 py-1.25 bg-primary">$35,140</td>
              <td class="px-24 py-1.25 bg-primary">$52,710</td>
              <td class="px-24 py-1.25">$70,280</td>
              <td class="px-24 py-1.25">$140,560</td>
            </tr>
          </tbody>
        </table>
        <center>Note: Exact income levels may vary by state.</center>
      </div>
      <div className="flex gap-x-10">
        {STEPS.map((step, i) => (
          <div className="flex bg-gray-100 justify-center items-center gap-x-5 py-10 px-5 w-1/3">
            <h1 className="rounded-full border border-gray-700 w-14 p-5 h-14 flex justify-center items-center text-2xl font-bold">
              {i + 1}
            </h1>
            <div>
              <h1 className="text-2xl font-bold">{step.title}</h1>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
