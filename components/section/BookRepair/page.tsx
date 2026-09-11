"use client";

import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BookRepairData } from "../../types";

export default function BookRepair({
  data,
}: {
  data: BookRepairData;
}) {
  const { intro, form, process } = data;

  const [submitted, setSubmitted] = useState(false);

  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    deviceType: "",
    brand: "",
    model: "",
    issueType: "",
    issueDetails: "",
    preferredDate: "",
    preferredTime: "",
  });

  const update = (key: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  /* ==============================
     ANIMATIONS
  ============================== */

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut" as const,
      },
    },
  };

  const stagger = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const FormIcon =
    (LucideIcons as any)[form.icon] ||
    LucideIcons.CalendarDays;

  /* ==============================
     FORM CLASSES
  ============================== */

  const inputClass = `
    w-full
    h-[48px]
    bg-white
    border
    border-[#D9E0E9]
    rounded-[6px]
    px-[14px]
    text-[13px]
    text-[#14213D]
    placeholder:text-[#78849A]
    outline-none
    transition-all
    focus:border-[#FFC107]
    focus:ring-1
    focus:ring-[#FFC107]/20
  `;

  const selectClass = `
    w-full
    h-[48px]
    bg-white
    border
    border-[#D9E0E9]
    rounded-[6px]
    px-[14px]
    pr-[38px]
    text-[13px]
    text-[#14213D]
    outline-none
    transition-all
    focus:border-[#FFC107]
    focus:ring-1
    focus:ring-[#FFC107]/20
    appearance-none
  `;

  return (
    <section
      className="w-full bg-white overflow-hidden"
      style={{
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >

      {/* =====================================================
          BOOK REPAIR HERO
      ===================================================== */}

      <div className="relative w-full">

        {/* TOP DOT PATTERN */}

        <div
          className="
            absolute
            top-0
            left-[51%]
            w-[180px]
            h-[120px]
            opacity-60
            pointer-events-none
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, #DDE3EA 2px, transparent 2px)",
            backgroundSize: "14px 14px",
            maskImage:
              "linear-gradient(135deg, black, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(135deg, black, transparent 85%)",
          }}
        />

        {/* BOTTOM DOT PATTERN */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-[180px]
            h-[90px]
            opacity-55
            pointer-events-none
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, #DDE3EA 2px, transparent 2px)",
            backgroundSize: "14px 14px",
            maskImage:
              "linear-gradient(45deg, black, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(45deg, black, transparent 85%)",
          }}
        />

        {/* MAIN CONTAINER */}

        <div
          className="
            relative
            z-10
            w-full
            max-w-[1400px]
            mx-auto
            px-[30px]
            sm:px-[45px]
            lg:px-[65px]
            xl:px-[80px]
            py-[38px]
            lg:py-[55px]
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[minmax(0,1fr)_480px]
              xl:grid-cols-[minmax(0,1fr)_500px]
              gap-[45px]
              xl:gap-[65px]
              items-center
            "
          >

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
              variants={fadeLeft}
              className="relative min-w-0"
            >

              {/* SMALL TITLE */}

              <div className="mb-[18px]">

                <p
                  className="
                    text-[#F5B400]
                    font-semibold
                    text-[11px]
                    sm:text-[12px]
                    tracking-[0.16em]
                    uppercase
                  "
                >
                  {intro.subtitle}
                </p>

                <div
                  className="
                    w-[55px]
                    h-[3px]
                    bg-[#F5B400]
                    mt-[7px]
                  "
                />

              </div>

              {/* MAIN HEADING */}

              <h2
                className="
                  text-[#06194B]
                  text-[44px]
                  sm:text-[52px]
                  lg:text-[55px]
                  xl:text-[58px]
                  font-extrabold
                  leading-[1.02]
                  tracking-[-1.8px]
                "
              >
                {intro.titlePart1}
              </h2>

              <h3
                className="
                  text-[#F5B400]
                  text-[44px]
                  sm:text-[52px]
                  lg:text-[55px]
                  xl:text-[58px]
                  font-extrabold
                  leading-[1.02]
                  tracking-[-1.8px]
                "
              >
                {intro.titleHighlight}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-[18px]
                  mb-[30px]
                  max-w-[540px]
                  text-[#66748B]
                  text-[13px]
                  sm:text-[14px]
                  leading-[1.7]
                "
              >
                {intro.description}
              </p>

              {/* =================================================
                  FEATURES + PHONE IMAGE
              ================================================= */}

              <div className="w-full max-w-[420px]">

                <motion.div variants={stagger} className="w-full">

                  {intro.features.map(
                    (feature, index) => {

                      const Icon =
                        (LucideIcons as any)[
                          feature.icon
                        ] ||
                        LucideIcons.CheckCircle2;

                      return (
                        <motion.div
                          key={feature.title}
                          variants={fadeUp}
                          className={`
                            flex
                            items-center
                            gap-[18px]
                            py-[20px]
                            ${
                              index <
                              intro.features.length - 1
                                ? "border-b border-[#E6EAF0]"
                                : ""
                            }
                          `}
                        >

                          <div
                            className="
                              w-[56px]
                              h-[56px]
                              rounded-full
                              bg-[#06194B]
                              text-[#FFC107]
                              flex
                              items-center
                              justify-center
                              shrink-0
                            "
                          >
                            <Icon
                              className="w-[24px] h-[24px]"
                              strokeWidth={1.8}
                            />
                          </div>

                          <div className="min-w-0">
                            <h4 className="text-[#06194B] font-bold text-[17px] sm:text-[18px] leading-[1.25]">
                              {feature.title}
                            </h4>
                            <p className="text-[#7A8799] text-[14px] leading-[1.55] mt-[4px]">
                              {feature.description}
                            </p>
                          </div>

                        </motion.div>
                      );
                    }
                  )}

                </motion.div>

              </div>

            </motion.div>


            {/* =================================================
                RIGHT BOOKING FORM
            ================================================= */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
              variants={fadeRight}
              className="
                w-full
                bg-white
                rounded-[8px]
                border
                border-[#DCE2EA]
                shadow-[0_10px_35px_rgba(6,25,75,0.12)]
                overflow-hidden
              "
            >

              {/* =========================
                  FORM HEADER
              ========================= */}

              <div
                className="
                  relative
                  h-[88px]
                  bg-[#06194B]
                  flex
                  items-center
                  justify-center
                  gap-[12px]
                "
              >

                <motion.div
                  animate={{
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-[#FFC107]"
                >

                  <FormIcon
                    className="w-[23px] h-[23px]"
                    strokeWidth={2}
                  />

                </motion.div>

                <h3
                  className="
                    text-white
                    text-[19px]
                    sm:text-[20px]
                    font-bold
                  "
                >
                  {form.title}
                </h3>

                {/* YELLOW LINE */}

                <span
                  className="
                    absolute
                    bottom-[17px]
                    left-1/2
                    -translate-x-1/2
                    w-[44px]
                    h-[3px]
                    bg-[#FFC107]
                  "
                />

              </div>


              {/* =========================
                  FORM BODY
              ========================= */}

              <div className="p-[20px] sm:p-[22px]">

                <AnimatePresence mode="wait">

                  {submitted ? (

                    /* SUCCESS */

                    <motion.div
                      key="success"
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="
                        min-h-[500px]
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                      "
                    >

                      <motion.div
                        initial={{
                          scale: 0,
                        }}
                        animate={{
                          scale: 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 14,
                        }}
                        className="
                          w-[64px]
                          h-[64px]
                          rounded-full
                          bg-green-100
                          text-green-600
                          flex
                          items-center
                          justify-center
                          mb-[18px]
                        "
                      >
                        <LucideIcons.Check
                          className="w-8 h-8"
                        />
                      </motion.div>

                      <h4
                        className="
                          text-[#06194B]
                          font-bold
                          text-[21px]
                          mb-[7px]
                        "
                      >
                        Booking Submitted
                      </h4>

                      <p
                        className="
                          text-[#64748B]
                          text-[13px]
                          max-w-[300px]
                        "
                      >
                        Our team will contact you shortly
                        to confirm your repair.
                      </p>

                    </motion.div>

                  ) : (

                    /* =========================
                       FORM
                    ========================= */

                    <motion.form
                      key="form"
                      onSubmit={onSubmit}
                      variants={stagger}
                      initial="hidden"
                      animate="visible"
                      className="space-y-[9px]"
                    >

                      {/* NAME + PHONE */}

                      <div
                        className="
                          grid
                          grid-cols-1
                          sm:grid-cols-2
                          gap-[9px]
                        "
                      >

                        {/* NAME */}

                        <motion.div
                          variants={fadeUp}
                          className="relative"
                        >

                          <LucideIcons.User
                            className="
                              absolute
                              left-[12px]
                              top-1/2
                              -translate-y-1/2
                              w-[14px]
                              h-[14px]
                              text-[#7B8799]
                              pointer-events-none
                            "
                          />

                          <input
                            required
                            className={`${inputClass} pl-[35px]`}
                            placeholder={
                              form.fields.fullName
                            }
                            value={values.fullName}
                            onChange={(e) =>
                              update(
                                "fullName",
                                e.target.value
                              )
                            }
                          />

                        </motion.div>


                        {/* PHONE */}

                        <motion.div
                          variants={fadeUp}
                          className="relative"
                        >

                          <LucideIcons.Phone
                            className="
                              absolute
                              left-[12px]
                              top-1/2
                              -translate-y-1/2
                              w-[14px]
                              h-[14px]
                              text-[#7B8799]
                              pointer-events-none
                            "
                          />

                          <input
                            required
                            className={`${inputClass} pl-[35px]`}
                            placeholder={
                              form.fields.phone
                            }
                            value={values.phone}
                            onChange={(e) =>
                              update(
                                "phone",
                                e.target.value
                              )
                            }
                          />

                        </motion.div>


                        {/* EMAIL */}

                        <motion.div
                          variants={fadeUp}
                          className="relative"
                        >

                          <LucideIcons.Mail
                            className="
                              absolute
                              left-[12px]
                              top-1/2
                              -translate-y-1/2
                              w-[14px]
                              h-[14px]
                              text-[#7B8799]
                              pointer-events-none
                            "
                          />

                          <input
                            required
                            type="email"
                            className={`${inputClass} pl-[35px]`}
                            placeholder={
                              form.fields.email
                            }
                            value={values.email}
                            onChange={(e) =>
                              update(
                                "email",
                                e.target.value
                              )
                            }
                          />

                        </motion.div>


                        {/* DEVICE TYPE */}

                        <motion.div
                          variants={fadeUp}
                          className="relative"
                        >

                          <select
                            required
                            className={selectClass}
                            value={values.deviceType}
                            onChange={(e) =>
                              update(
                                "deviceType",
                                e.target.value
                              )
                            }
                          >

                            <option value="">
                              {form.fields.deviceType}
                            </option>

                            {form.options.deviceTypes.map(
                              (opt) => (
                                <option
                                  key={opt}
                                  value={opt}
                                >
                                  {opt}
                                </option>
                              )
                            )}

                          </select>

                          <LucideIcons.ChevronDown
                            className="
                              absolute
                              right-[12px]
                              top-1/2
                              -translate-y-1/2
                              w-[14px]
                              h-[14px]
                              text-[#7B8799]
                              pointer-events-none
                            "
                          />

                        </motion.div>


                        {/* BRAND */}

                        <motion.div
                          variants={fadeUp}
                          className="relative"
                        >

                          <select
                            required
                            className={selectClass}
                            value={values.brand}
                            onChange={(e) =>
                              update(
                                "brand",
                                e.target.value
                              )
                            }
                          >

                            <option value="">
                              {form.fields.brand}
                            </option>

                            {form.options.brands.map(
                              (opt) => (
                                <option
                                  key={opt}
                                  value={opt}
                                >
                                  {opt}
                                </option>
                              )
                            )}

                          </select>

                          <LucideIcons.ChevronDown
                            className="
                              absolute
                              right-[12px]
                              top-1/2
                              -translate-y-1/2
                              w-[14px]
                              h-[14px]
                              text-[#7B8799]
                              pointer-events-none
                            "
                          />

                        </motion.div>


                        {/* MODEL */}

                        <motion.div
                          variants={fadeUp}
                          className="relative"
                        >

                          <select
                            required
                            className={selectClass}
                            value={values.model}
                            onChange={(e) =>
                              update(
                                "model",
                                e.target.value
                              )
                            }
                          >

                            <option value="">
                              {form.fields.model}
                            </option>

                            {form.options.models.map(
                              (opt) => (
                                <option
                                  key={opt}
                                  value={opt}
                                >
                                  {opt}
                                </option>
                              )
                            )}

                          </select>

                          <LucideIcons.ChevronDown
                            className="
                              absolute
                              right-[12px]
                              top-1/2
                              -translate-y-1/2
                              w-[14px]
                              h-[14px]
                              text-[#7B8799]
                              pointer-events-none
                            "
                          />

                        </motion.div>

                      </div>


                      {/* ISSUE TYPE */}

                      <motion.div
                        variants={fadeUp}
                        className="relative"
                      >

                        <select
                          required
                          className={selectClass}
                          value={values.issueType}
                          onChange={(e) =>
                            update(
                              "issueType",
                              e.target.value
                            )
                          }
                        >

                          <option value="">
                            {form.fields.issueType}
                          </option>

                          {form.options.issueTypes.map(
                            (opt) => (
                              <option
                                key={opt}
                                value={opt}
                              >
                                {opt}
                              </option>
                            )
                          )}

                        </select>

                        <LucideIcons.ChevronDown
                          className="
                            absolute
                            right-[12px]
                            top-1/2
                            -translate-y-1/2
                            w-[14px]
                            h-[14px]
                            text-[#7B8799]
                            pointer-events-none
                          "
                        />

                      </motion.div>


                      {/* ISSUE DETAILS */}

                      <motion.div
                        variants={fadeUp}
                        className="relative"
                      >

                        <LucideIcons.ClipboardList
                          className="
                            absolute
                            left-[12px]
                            top-[13px]
                            w-[15px]
                            h-[15px]
                            text-[#7B8799]
                          "
                        />

                        <textarea
                          rows={4}
                          className="
                            w-full
                            h-[105px]
                            bg-white
                            border
                            border-[#D9E0E9]
                            rounded-[6px]
                            px-[14px]
                            py-[12px]
                            pl-[35px]
                            text-[13px]
                            text-[#14213D]
                            placeholder:text-[#78849A]
                            outline-none
                            transition-all
                            focus:border-[#FFC107]
                            focus:ring-1
                            focus:ring-[#FFC107]/20
                            resize-none
                          "
                          placeholder={
                            form.fields.issueDetails
                          }
                          value={values.issueDetails}
                          onChange={(e) =>
                            update(
                              "issueDetails",
                              e.target.value
                            )
                          }
                        />

                      </motion.div>


                      {/* DATE + TIME */}

                      <div
                        className="
                          grid
                          grid-cols-1
                          sm:grid-cols-2
                          gap-[9px]
                        "
                      >

                        {/* DATE */}

                        <motion.div
                          variants={fadeUp}
                        >

                          <label
                            className="
                              block
                              text-[10px]
                              font-medium
                              text-[#64748B]
                              mb-[5px]
                            "
                          >
                            {form.fields.preferredDate}
                          </label>

                          <input
                            required
                            type="date"
                            className={inputClass}
                            value={
                              values.preferredDate
                            }
                            onChange={(e) =>
                              update(
                                "preferredDate",
                                e.target.value
                              )
                            }
                          />

                        </motion.div>


                        {/* TIME */}

                        <motion.div
                          variants={fadeUp}
                        >

                          <label
                            className="
                              block
                              text-[10px]
                              font-medium
                              text-[#64748B]
                              mb-[5px]
                            "
                          >
                            {form.fields.preferredTime}
                          </label>

                          <div className="relative">

                            <select
                              required
                              className={selectClass}
                              value={
                                values.preferredTime
                              }
                              onChange={(e) =>
                                update(
                                  "preferredTime",
                                  e.target.value
                                )
                              }
                            >

                              <option value="">
                                {form.fields.preferredTime}
                              </option>

                              {form.options.times.map(
                                (opt) => (
                                  <option
                                    key={opt}
                                    value={opt}
                                  >
                                    {opt}
                                  </option>
                                )
                              )}

                            </select>

                            <LucideIcons.ChevronDown
                              className="
                                absolute
                                right-[12px]
                                top-1/2
                                -translate-y-1/2
                                w-[14px]
                                h-[14px]
                                text-[#7B8799]
                                pointer-events-none
                              "
                            />

                          </div>

                        </motion.div>

                      </div>


                      {/* PICKUP BOX */}

                      <motion.div
                        variants={fadeUp}
                        className="
                          flex
                          items-start
                          gap-[10px]
                          bg-[#FFF9E8]
                          border
                          border-[#FFC107]
                          rounded-[6px]
                          px-[12px]
                          py-[11px]
                        "
                      >

                        <LucideIcons.Info
                          className="
                            w-[16px]
                            h-[16px]
                            text-[#06194B]
                            shrink-0
                            mt-[1px]
                          "
                        />

                        <div>

                          <p
                            className="
                              text-[#06194B]
                              font-bold
                              text-[11px]
                              leading-tight
                            "
                          >
                            {form.pickupNote.title}
                          </p>

                          <p
                            className="
                              text-[#64748B]
                              text-[9px]
                              leading-[1.5]
                              mt-[3px]
                            "
                          >
                            {form.pickupNote.description}
                          </p>

                        </div>

                      </motion.div>


                      {/* SUBMIT */}

                      <motion.button
                        type="submit"
                        variants={fadeUp}
                        whileHover={{
                          scale: 1.01,
                          y: -1,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className="
                          w-full
                          h-[46px]
                          bg-[#FFC107]
                          hover:bg-[#F5B400]
                          text-[#06194B]
                          font-bold
                          text-[13px]
                          rounded-[6px]
                          flex
                          items-center
                          justify-center
                          gap-[9px]
                          transition-all
                          shadow-[0_5px_12px_rgba(255,193,7,0.20)]
                        "
                      >

                        <LucideIcons.Send
                          className="w-[14px] h-[14px]"
                        />

                        {form.submitLabel}

                      </motion.button>


                      {/* PRIVACY */}

                      <p
                        className="
                          text-center
                          text-[#94A3B8]
                          text-[9px]
                          flex
                          items-center
                          justify-center
                          gap-[5px]
                        "
                      >

                        <LucideIcons.Lock
                          className="w-[10px] h-[10px]"
                        />

                        {form.privacyNote}

                      </p>

                    </motion.form>
                  )}

                </AnimatePresence>

              </div>

            </motion.div>

          </div>
        </div>
      </div>


      {/* =====================================================
          PROCESS SECTION
      ===================================================== */}

      <div className="bg-[#F8FBFF] py-12 md:py-16">

        <div
          className="
            max-w-[1400px]
            mx-auto
            px-[30px]
            sm:px-[45px]
            lg:px-[65px]
          "
        >

          <motion.div
            className="text-center mb-10"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >

            <p
              className="
                text-[#F5B400]
                font-bold
                text-[12px]
                tracking-[0.16em]
                mb-2
              "
            >
              {process.subtitle}
            </p>

            <h3
              className="
                text-[#06194B]
                text-[28px]
                sm:text-[36px]
                font-extrabold
              "
            >
              {process.title}
            </h3>

          </motion.div>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-5
              gap-8
              lg:gap-4
            "
          >

            {process.steps.map((step, index) => {

              const Icon =
                (LucideIcons as any)[step.icon] ||
                LucideIcons.Circle;

              return (
                <motion.div
                  key={step.number}
                  className="
                    relative
                    text-center
                    px-2
                  "
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.12,
                  }}
                >

                  {index <
                    process.steps.length - 1 && (
                    <div
                      className="
                        hidden
                        lg:block
                        absolute
                        top-8
                        left-[60%]
                        right-[-40%]
                        border-t-2
                        border-dotted
                        border-[#CBD5E1]
                      "
                    />
                  )}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      justify-center
                      mb-4
                    "
                  >

                    <motion.div
                      className="
                        w-16
                        h-16
                        rounded-full
                        border-[3px]
                        border-[#FFC107]
                        bg-white
                        flex
                        items-center
                        justify-center
                        text-[#06194B]
                      "
                      whileHover={{
                        scale: 1.08,
                        rotate: 8,
                      }}
                    >

                      <Icon
                        className="w-7 h-7"
                        strokeWidth={1.7}
                      />

                    </motion.div>

                    <span
                      className="
                        absolute
                        -top-2
                        -right-1
                        lg:right-[28%]
                        bg-[#FFC107]
                        text-[#06194B]
                        text-[10px]
                        font-bold
                        w-7
                        h-7
                        rounded-full
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {step.number}
                    </span>

                  </div>

                  <h4
                    className="
                      text-[#06194B]
                      font-bold
                      text-[15px]
                      mb-1.5
                    "
                  >
                    {step.title}
                  </h4>

                  <p
                    className="
                      text-[#64748B]
                      text-[12px]
                      leading-relaxed
                    "
                  >
                    {step.description}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>

    </section>
  );
}