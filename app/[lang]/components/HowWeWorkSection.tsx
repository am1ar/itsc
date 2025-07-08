"use client";

import { cn } from "@/lib/utils";
import { Dictionary } from "@/types/dictionary";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { howWeWorkData } from "../data/howWeWork";

interface HowWeWorkSectionProps {
  dictionary: Dictionary;
  lang: string;
}

export default function HowWeWorkSection({
  dictionary,
  lang,
}: HowWeWorkSectionProps) {
  // Get localized data
  const localizedData =
    howWeWorkData[lang as keyof typeof howWeWorkData] || howWeWorkData.en;
  const { stages, methodologyPrinciples, testimonials, labels } = localizedData;

  // Determine text direction based on language
  const isRTL = lang === "ar";

  return (
    <section
      className={cn(
        "relative z-20 px-6 py-24 bg-muted dark:bg-muted/10",
        isRTL ? "rtl" : "ltr"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className={cn("text-center mb-16")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 dark:border-primary/30 dark:bg-primary/20 px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-primary">
              {labels.methodology}
            </span>
          </div>
          <h2 className={cn("text-4xl font-mono mb-4 dark:text-white")}>
            {dictionary.howWeWork.title}
          </h2>
          <p className={cn("text-xl text-muted-foreground max-w-3xl mx-auto")}>
            {dictionary.howWeWork.description}
          </p>
        </motion.div>

        {/* Methodology Principles */}
        {/* <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {methodologyPrinciples.map((principle, index) => (
            <div key={principle.title} className="text-center p-6 rounded-xl bg-card dark:bg-card border border-border">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                <principle.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">{principle.title}</h3>
              <p className="text-sm text-muted-foreground">{principle.description}</p>
            </div>
          ))}
        </motion.div> */}

        {/* Process Flow - Desktop */}
        <div dir="ltr" className="hidden lg:block mb-20">
          <div dir="ltr" className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30" />

            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                className={cn(
                  "flex items-center mb-16",
                  // Same pattern for both RTL and LTR: even indices LEFT, odd indices RIGHT
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                )}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? (isRTL ? -50 : 50) : isRTL ? 50 : -50,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={cn(
                    "w-1/2",
                    // Same pattern for both RTL and LTR: even indices LEFT, odd indices RIGHT
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  )}
                  dir="ltr"
                >
                  <div
                    dir="ltr"
                    className="bg-card dark:bg-card rounded-2xl p-8 shadow-lg border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-semibold dark:text-white flex-1">
                        {stage.title}
                      </h3>
                      {/* <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {stage.duration}
                      </span> */}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-2">
                        {labels.keyDeliverables}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {stage.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <Zap className="w-4 h-4" />
                      <span>{stage.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Stage Icon */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <stage.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div> */}
                </div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Flow - Mobile */}
        <div className="lg:hidden mb-20">
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                className="bg-card dark:bg-card rounded-2xl p-6 shadow-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={cn(
                    "flex items-center gap-4 mb-4",
                    isRTL ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <stage.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div
                      className={cn(
                        "absolute -top-1 w-5 h-5 bg-card border-2 border-primary rounded-full flex items-center justify-center",
                        isRTL ? "-left-1" : "-right-1"
                      )}
                    >
                      <span className="text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div
                    className={cn("flex-1", isRTL ? "text-right" : "text-left")}
                  >
                    <h3
                      className={cn(
                        "text-lg font-semibold dark:text-white mb-1",
                        isRTL ? "text-right" : "text-left"
                      )}
                    >
                      {stage.title}
                    </h3>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {stage.duration}
                    </span>
                  </div>
                </div>

                <p
                  className={cn(
                    "text-muted-foreground mb-4 leading-relaxed",
                    isRTL ? "text-right" : "text-left"
                  )}
                >
                  {stage.description}
                </p>

                <div className="mb-4">
                  <h4
                    className={cn(
                      "text-sm font-semibold text-primary mb-2",
                      isRTL ? "text-right" : "text-left"
                    )}
                  >
                    {labels.keyDeliverables}
                  </h4>
                  <div className="grid gap-2">
                    {stage.deliverables.map((deliverable, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          "flex items-center gap-2",
                          isRTL ? "flex-row-reverse" : "flex-row"
                        )}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        <span
                          className={cn(
                            "text-sm text-muted-foreground",
                            isRTL ? "text-right" : "text-left"
                          )}
                        >
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={cn(
                    "inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium",
                    isRTL ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <Zap className="w-4 h-4" />
                  <span className={cn(isRTL ? "text-right" : "text-left")}>
                    {stage.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        {/* <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 dark:text-white">What Our Clients Say</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card dark:bg-card p-8 rounded-2xl shadow-lg border border-border">
                <div className="mb-6">
                  <div className="text-primary text-4xl mb-4">"</div>
                  <p className="text-muted-foreground italic leading-relaxed">{testimonial.quote}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold dark:text-white">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">Result:</div>
                    <div className="text-sm text-muted-foreground">{testimonial.results}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Call to Action */}
        <motion.div
          className={cn(
            "text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20",
            isRTL ? "text-right" : "text-left"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3
            className={cn(
              "text-3xl font-bold mb-4 text-foreground dark:text-foreground",
              isRTL ? "text-right" : "text-center"
            )}
          >
            {labels.ctaTitle}
          </h3>
          <p
            className={cn(
              "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed",
              isRTL ? "text-right" : "text-center"
            )}
          >
            {labels.ctaDescription}
          </p>
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4",
              isRTL ? "justify-center" : "justify-center"
            )}
          >
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
              {labels.ctaButton}
            </button>
            {/* <button className="px-8 py-3 border border-primary text-primary rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors">
              {labels.ctaSecondary}
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
