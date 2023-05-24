import { Fragment } from "react";
import { Separator } from "../../components/separator/separator";
import sponsors from "./sponsers.json";
import clsx from "clsx";

type Sponsor = {
  name: string;
  logo: string;
  url: string;
};

type Tier = {
  name: string;
  sponsors: Sponsor[];
};

const SponsorTier = ({ tier, top = false }: { tier: Tier; top?: boolean }) => {
  return (
    <div className="relative linebyline">
      <h4 className="font-bold text-2xl font-title text-primary sponsor-heading">
        <span >
          {tier.name}
        </span>
      </h4>
      <div
        className={clsx(
          "grid gap-12 sm:gap-6 ml-12 items-center justify-items-center",
          {
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-3": !top,
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-2": top,
          }
        )}
      >
        {tier.sponsors.map((sponsor) => (
          <a
            key={sponsor.url}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-w-[250px] max-h-[120px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export const Sponsorsmobile = () => {
  const topTier = sponsors.tiers[0];
  const remaining = sponsors.tiers
    .slice(1)
    .filter((t) => t.sponsors.length > 0);

  const noSponsors = remaining.length + topTier.sponsors.length === 0;

  return (
    <div className="bg-white py-24 px-6">
      <section className="max-w-4xl lg:max-w-6xl mx-auto mb-18">
        <div>
          {topTier.sponsors.length > 0 && (
            <SponsorTier tier={topTier} top={true} />
          )}
        </div>

        {remaining.length > 0 && <Separator light />}

        {remaining.map((tier, index) => (
       
          <Fragment key={tier.name} >
            <SponsorTier tier={tier} top={tier.name === "Platinum"} />
            {index !== remaining.length - 1 && <Separator light />}
          </Fragment>
        ))}
      </section>
    </div>
  );
};
