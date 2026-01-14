export default defineAppConfig({
  ui: {
    navigationMenu: {
      slots: {
        list: "space-y-4",
        link: "font-medium text-base text-black font-space-mono before:content-none",
        linkLabel: "truncate",
        linkLabelExternalIcon: "hidden",
      },
      variants: {
        active: {
          true: {
            childLink: "text-black",
          },
          false: {
            link: "text-black",
            childLink: ["hover:text-gray-600", "transition-colors before:transition-colors"],
          },
        },
      },
      compoundVariants: [
        {
          disabled: false,
          active: false,
          variant: "pill",
          class: {
            link: ["hover:text-gray-600", "hover:font-bold", "transition-colors before:transition-colors"],
          },
        },
        {
          color: "primary",
          variant: "pill",
          active: true,
          class: {
            link: "text-black font-bold",
          },
        },
      ],
      defaultVariants: {
        color: "primary",
        highlightColor: "primary",
        variant: "pill",
      },
    },
    button: {
      slots: {
        base: "flex items-center justify-center rounded-none font-space-mono px-4 py-4 cursor-pointer",
      },
      variants: {
        size: {
          md: {
            base: "px-6 py-2 text-lg",
          },
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class: "text-white hover:bg-linear-to-r from-primary to-[#006064] transition-all ease-linear duration-300",
        },
        {
          color: "secondary",
          variant: "solid",
          class: "text-white hover:bg-linear-to-r from-secondary to-[#004d40] transition-all ease-linear duration-300",
        },
      ],
      defaultVariants: {
        color: "primary",
        variant: "solid",
        size: "md",
      },
    },
    tabs: {
      slots: {
        list: "p-0",
        trigger: "font-vcr-osd-mono cursor-pointer data-[state=inactive]:text-black hover:data-[state=inactive]:not-disabled:text-gray-600",
      },
      variants: {
        variant: {
          pill: {
            list: "bg-tertiary rounded-none",
            indicator: "rounded-none shadow-none",
          },
        },
        size: {
          xl: {
            trigger: "py-4 lg:text-xl text-sm",
          },
        },
      },
      compoundVariants: [
        {
          orientation: "horizontal",
          variant: "pill",
          class: {
            indicator: "inset-y-0",
          },
        },
        {
          color: "neutral",
          variant: "pill",
          class: {
            indicator: "bg-black",
            trigger: "data-[state=active]:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
          },
        },
      ],
    },
    accordion: {
      slots: {
        root: "space-y-4",
        item: "border-none bg-tertiary data-[state=open]:bg-black data-[state=open]:text-white transition-colors",
        header: "flex",
        trigger: "relative cursor-pointer justify-center font-normal text-center text-xl p-4 pr-9",
        content:
          "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
        body: "p-4 pt-0 text-base",
        leadingIcon: "shrink-0 size-5",
        trailingIcon: "absolute top-1/2 right-4 -translate-y-1/2 text-black ms-[unest] group-data-[state=open]:text-white",
        label: "text-center break-words",
      },
      variants: {
        disabled: {
          true: {
            trigger: "cursor-not-allowed opacity-75",
          },
        },
      },
    },
  },
})
