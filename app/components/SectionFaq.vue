<template>
  <section class="relative pt-16 lg:pt-24 px-5 md:px-10 lg:px-18 lg:pl-0!">
    <div class="text-center mb-6">
      <p
        class="text-black font-vcr-osd-mono lg:text-xl max-sm:text-sm lg:mb-2 uppercase"
      >
        FAQ
      </p>
      <h2 ref="titleText" class="text-black">FREQUENTLY ASKED QUESTIONS</h2>
    </div>

    <div class="max-w-3xl mx-auto faq-content">
      <UAccordion
        :items="faqItems"
        trailing-icon="i-lucide-plus"
        :unmountOnHide="false"
      >
        <template #body="{ item }">
          <MDC :value="item.content ?? ''" />
        </template>
      </UAccordion>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/SplitText";
import { faqs } from "~/content/faqs";

const titleText = useTemplateRef<HTMLElement>("titleText");
const { animateText } = useTextScramble();

// Use FAQs directly from the TypeScript file
const faqItems = computed(() => faqs);

onMounted(() => {
  if (!titleText.value) return;

  SplitText.create(titleText.value!, {
    type: "words",
    onSplit: (self) => {
      self.words.forEach((word) => {
        animateText(word as HTMLElement, word.textContent, {
          trigger: titleText.value!,
        });
      });
    },
  });
});
</script>

<style scoped>
/* Override MDC list marker color */
:deep(.faq-content ul li::marker) {
  color: currentColor !important;
}

:deep(.faq-content :is(p, ul, ol, li)) {
  line-height: 1.5 !important;
}

:deep(.faq-content :is(p, ul, ol)) {
  margin-bottom: 4px !important;
  margin-top: 4px !important;
}

:deep(.faq-content :is(li)) {
  margin: 0 !important;
}

:deep(.faq-content :is(p, ul, ol):only-child) {
  margin: 0 !important;
}

:deep(.faq-content :is(p, ul, ol):first-child) {
  margin-top: 0 !important;
}

:deep(.faq-content :is(p, ul, ol):last-child) {
  margin-bottom: 0 !important;
}

:deep(.faq-content a) {
  font-weight: normal !important;
  color: currentColor !important;
  text-decoration: underline !important;
  text-decoration-color: currentColor !important;
  text-decoration-thickness: 1px !important;
  text-underline-offset: 2px !important;
}
</style>
