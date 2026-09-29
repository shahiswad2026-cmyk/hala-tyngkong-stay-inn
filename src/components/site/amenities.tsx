import { amenities } from "@/config/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { UtensilsCrossed, SquareParking, Sun } from "lucide-react";

const icons = {
  breakfast: UtensilsCrossed,
  parking: SquareParking,
  terrace: Sun,
} as const;

/**
 * Compact amenities strip — ONLY facilities verified for this exact
 * stay (owner-confirmed breakfast; parking + terrace as listed on the
 * stay's own OTA listings). Nothing invented.
 */
export function Amenities() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="section-y scroll-mt-20 bg-ivory"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-8">
        <div id="amenities-heading">
          <SectionHeading
            eyebrow={amenities.eyebrow}
            heading={amenities.heading}
            subtitle={amenities.note}
          />
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3 sm:gap-6 lg:mt-14">
          {amenities.items.map((item, i) => {
            const Icon = icons[item.id as keyof typeof icons] ?? Sun;
            return (
              <Reveal as="li" key={item.id} delay={i * 100} className="h-full">
                <div className="flex h-full flex-col items-center rounded-2xl border border-sage/80 bg-white px-6 py-8 text-center shadow-[0_16px_44px_-32px_rgba(21,58,45,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-32px_rgba(21,58,45,0.38)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-soft text-forest ring-1 ring-sage">
                    <Icon className="h-5.5 w-5.5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-evergreen">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-ink">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
