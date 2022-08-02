import { Fragment } from "react";
import { TrafficPricingCard } from "@components";

export const TrafficBasedPricing = () => {
  return (
    <Fragment>
      <section className="min-h-screen flex flex-col items-center justify-center section-bg py-16">
        <div className="flex flex-col items-center mb-16 heading-bg py-8">
          <h1 className="text-2xl text-darkDesaturatedBlue font-black mb-2">
            Simple, traffic based pricing
          </h1>
          <span className="text-grayishBlue">
            Sign-up for our 30-day trial.
          </span>
          <span className="text-grayishBlue">No credit card required.</span>
        </div>
        <TrafficPricingCard />
      </section>
    </Fragment>
  );
};
