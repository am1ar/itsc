"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Users,
  Headphones,
  Building2,
  Globe,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  dictionary: any;
  lang: string;
}

export default function ContactSection({
  dictionary,
  lang,
}: ContactSectionProps) {
  // Determine text direction based on language
  const isRTL = lang === "ar";

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    interest: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language: lang,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: isRTL
            ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً."
            : "Your message has been sent successfully! We'll get back to you soon.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          industry: "",
          interest: "",
          message: "",
          consent: false,
        });
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: isRTL
          ? "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى."
          : "An error occurred while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={cn(
        "relative z-10 px-6 py-24 bg-background dark:bg-background",
        isRTL ? "rtl font-arabic" : "ltr"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className={cn("text-center mb-16", isRTL && "text-center")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className={cn(
              "inline-flex items-center rounded-full border border-primary/20 bg-primary/10 dark:border-primary/30 dark:bg-primary/20 px-4 py-2 mb-6",
              isRTL && "font-arabic"
            )}
          >
            <span
              className={cn(
                "text-sm font-semibold text-primary",
                isRTL && "font-arabic"
              )}
            >
              {dictionary.contact.tagline}
            </span>
          </div>
          <h2
            className={cn(
              "text-4xl font-mono mb-4 text-foreground dark:text-foreground",
              isRTL && "text-center font-arabic"
            )}
          >
            {dictionary.contact.subtitle}
          </h2>
          <p
            className={cn(
              "text-xl text-muted-foreground max-w-3xl mx-auto",
              isRTL && "text-center font-arabic"
            )}
          >
            {dictionary.contact.subtitleDescription}
          </p>
        </motion.div>

        {/* Quick Actions */}
        {/* <motion.div
          className="grid gap-6 md:grid-cols-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {quickActions.map((action, index) => (
            <div
              key={action.title}
              className="group p-6 bg-card dark:bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-4`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-foreground">{action.title}</h3>
              <p className="text-muted-foreground mb-4">{action.description}</p>
              <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                {action.action} →
              </button>
            </div>
          ))}
        </motion.div> */}

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card dark:bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3
                className={cn(
                  "text-2xl font-semibold mb-6 text-foreground dark:text-foreground",
                  isRTL && "text-right font-arabic"
                )}
              >
                {dictionary.contact.formTitle}
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Success/Error Messages */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "p-4 rounded-lg border",
                      submitStatus.type === "success"
                        ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400"
                        : "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center gap-2",
                        isRTL && "flex-row-reverse"
                      )}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className={cn(isRTL && "font-arabic text-right")}>
                        {submitStatus.message}
                      </span>
                    </div>
                  </motion.div>
                )}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className={cn(
                        "block text-sm font-medium mb-2 text-foreground dark:text-foreground",
                        isRTL && "text-right font-arabic"
                      )}
                    >
                      {dictionary.contact.form.firstName} *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={cn(
                        "bg-background dark:bg-background border-border dark:border-border",
                        isRTL && "text-right font-arabic"
                      )}
                      placeholder={
                        dictionary.contact.form.placeholders.firstName
                      }
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className={cn(
                        "block text-sm font-medium mb-2 text-foreground dark:text-foreground",
                        isRTL && "text-right font-arabic"
                      )}
                    >
                      {dictionary.contact.form.lastName} *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={cn(
                        "bg-background dark:bg-background border-border dark:border-border",
                        isRTL && "text-right font-arabic"
                      )}
                      placeholder={
                        dictionary.contact.form.placeholders.lastName
                      }
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={cn(
                      "block text-sm font-medium mb-2 text-foreground dark:text-foreground",
                      isRTL && "text-right font-arabic"
                    )}
                  >
                    {dictionary.contact.form.email} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={cn(
                      "bg-background dark:bg-background border-border dark:border-border",
                      isRTL && "text-right font-arabic"
                    )}
                    placeholder={dictionary.contact.form.placeholders.email}
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className={cn(
                        "block text-sm font-medium mb-2 text-foreground dark:text-foreground",
                        isRTL && "text-right font-arabic"
                      )}
                    >
                      {dictionary.contact.form.phone}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={cn(
                        "bg-background dark:bg-background border-border dark:border-border",
                        isRTL && "text-right font-arabic"
                      )}
                      placeholder={dictionary.contact.form.placeholders.phone}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className={cn(
                        "block text-sm font-medium mb-2 text-foreground dark:text-foreground",
                        isRTL && "text-right font-arabic"
                      )}
                    >
                      {dictionary.contact.form.company} *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className={cn(
                        "bg-background dark:bg-background border-border dark:border-border",
                        isRTL && "text-right font-arabic"
                      )}
                      placeholder={dictionary.contact.form.placeholders.company}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="industry"
                    className={cn(
                      "block text-sm font-medium mb-2 text-foreground dark:text-foreground",
                      isRTL && "text-right font-arabic"
                    )}
                  >
                    {dictionary.contact.form.industry}
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={cn(
                      "w-full px-3 py-2 bg-background dark:bg-background border border-border dark:border-border rounded-md text-foreground dark:text-foreground",
                      isRTL && "text-right font-arabic"
                    )}
                    dir={isRTL ? "rtl" : "ltr"}
                  >
                    <option value="">
                      {dictionary.contact.form.placeholders.industry}
                    </option>
                    <option value="retail">
                      {dictionary.contact.form.industries.retail}
                    </option>
                    <option value="logistics">
                      {dictionary.contact.form.industries.logistics}
                    </option>
                    <option value="manufacturing">
                      {dictionary.contact.form.industries.manufacturing}
                    </option>
                    <option value="import-export">
                      {dictionary.contact.form.industries.importExport}
                    </option>
                    <option value="healthcare">
                      {dictionary.contact.form.industries.healthcare}
                    </option>
                    <option value="automotive">
                      {dictionary.contact.form.industries.automotive}
                    </option>
                    <option value="other">
                      {dictionary.contact.form.industries.other}
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className={cn(
                      "block text-sm font-medium mb-2 text-foreground dark:text-foreground",
                      isRTL && "text-right font-arabic"
                    )}
                  >
                    {dictionary.contact.form.interest}
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={cn(
                      "w-full px-3 py-2 bg-background dark:bg-background border border-border dark:border-border rounded-md text-foreground dark:text-foreground",
                      isRTL && "text-right font-arabic"
                    )}
                    dir={isRTL ? "rtl" : "ltr"}
                  >
                    <option value="">
                      {dictionary.contact.form.placeholders.interest}
                    </option>
                    <option value="transport-analytics">
                      {dictionary.contact.form.interests.transportAnalytics}
                    </option>
                    <option value="route-optimization">
                      {dictionary.contact.form.interests.routeOptimization}
                    </option>
                    <option value="fleet-management">
                      {dictionary.contact.form.interests.fleetManagement}
                    </option>
                    <option value="yard-management">
                      {dictionary.contact.form.interests.yardManagement}
                    </option>
                    <option value="system-architecture">
                      {dictionary.contact.form.interests.systemArchitecture}
                    </option>
                    <option value="logistics-software">
                      {dictionary.contact.form.interests.logisticsSoftware}
                    </option>
                    <option value="warehouse-automation">
                      {dictionary.contact.form.interests.warehouseAutomation}
                    </option>
                    <option value="consultation">
                      {dictionary.contact.form.interests.consultation}
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={cn(
                      "block text-sm font-medium mb-2 text-foreground dark:text-foreground",
                      isRTL && "text-right font-arabic"
                    )}
                  >
                    {dictionary.contact.form.message} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={dictionary.contact.form.placeholders.message}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={cn(
                      "bg-background dark:bg-background border-border dark:border-border",
                      isRTL && "text-right font-arabic"
                    )}
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                </div>
                <div
                  className={cn(
                    "flex items-start gap-3",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mt-1"
                    required
                    checked={formData.consent}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor="consent"
                    className={cn(
                      "text-sm text-muted-foreground",
                      isRTL && "text-right font-arabic"
                    )}
                  >
                    {dictionary.contact.form.consent} *
                  </label>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/90 disabled:opacity-50",
                    isRTL && "font-arabic"
                  )}
                >
                  {isSubmitting ? (
                    <Loader2
                      className={cn(
                        "h-4 w-4 animate-spin",
                        isRTL ? "ml-2" : "mr-2"
                      )}
                    />
                  ) : (
                    <Send className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")} />
                  )}
                  {isSubmitting
                    ? isRTL
                      ? "جارٍ الإرسال..."
                      : "Sending..."
                    : dictionary.contact.form.submit}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {dictionary.contact.methods.map((method: any, index: number) => (
                <div
                  key={method.title}
                  className="bg-card dark:bg-card rounded-2xl p-6 border border-border shadow-sm"
                >
                  <div
                    className={cn(
                      "flex items-start gap-4",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg">
                      {method.title.includes("Phone") ||
                      method.title.includes("الهاتف") ? (
                        <Phone className="w-6 h-6 text-primary" />
                      ) : (
                        <Mail className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4
                        className={cn(
                          "text-lg font-semibold text-foreground dark:text-foreground mb-1",
                          isRTL && "text-right font-arabic"
                        )}
                      >
                        {method.title}
                      </h4>
                      <p
                        className={cn(
                          "text-muted-foreground mb-3",
                          isRTL && "text-right font-arabic"
                        )}
                      >
                        {method.description}
                      </p>
                      <div className="space-y-2">
                        {method.details.map((detail: any, idx: number) => (
                          <div
                            key={idx}
                            className={cn(
                              "flex flex-col sm:flex-row sm:items-center gap-2",
                              isRTL && "sm:flex-row-reverse"
                            )}
                          >
                            <span
                              className={cn(
                                "text-sm font-medium text-foreground dark:text-foreground min-w-[120px]",
                                isRTL && "text-right font-arabic"
                              )}
                            >
                              {detail.label}:
                            </span>
                            {detail.value.includes("@") ? (
                              <a
                                href={`mailto:${detail.value}`}
                                className="text-primary hover:text-primary/80 transition-colors"
                              >
                                {detail.value}
                              </a>
                            ) : (
                              <a
                                href={`tel:${detail.value}`}
                                className="text-primary hover:text-primary/80 transition-colors"
                              >
                                {detail.value}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                      <div
                        className={cn(
                          "flex items-center gap-2 mt-3 text-sm text-muted-foreground",
                          isRTL && "flex-row-reverse font-arabic"
                        )}
                      >
                        <Clock className="w-4 h-4" />
                        {method.availability}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Reach */}
            {/* <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-6 border border-primary/20">
              <div
                className={cn(
                  "flex items-center gap-3 mb-4",
                  isRTL && "flex-row-reverse"
                )}
              >
                <Globe className="w-6 h-6 text-primary" />
                <h4
                  className={cn(
                    "text-lg font-semibold text-foreground dark:text-foreground",
                    isRTL && "text-right font-arabic"
                  )}
                >
                  {dictionary.contact.globalReach.title}
                </h4>
              </div>
              <p
                className={cn(
                  "text-muted-foreground mb-4",
                  isRTL && "text-right font-arabic"
                )}
              >
                {dictionary.contact.globalReach.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className={cn(isRTL && "text-right")}>
                  <div className="font-semibold text-primary">25+</div>
                  <div
                    className={cn(
                      "text-muted-foreground",
                      isRTL && "font-arabic"
                    )}
                  >
                    {dictionary.contact.globalReach.stats.countries}
                  </div>
                </div>
                <div className={cn(isRTL && "text-right")}>
                  <div className="font-semibold text-primary">70+</div>
                  <div
                    className={cn(
                      "text-muted-foreground",
                      isRTL && "font-arabic"
                    )}
                  >
                    {dictionary.contact.globalReach.stats.projects}
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
