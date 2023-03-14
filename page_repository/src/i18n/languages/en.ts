const en = {
  title: "Chocolat",
  description: "A letter to a precious person",
  language: "Language",
  japanese: "日本語",
  korean: "한국어",
  english: "English",

  "letter.keyword0": "All",
  "letter.keyword1": "Birthday",
  "letter.keyword2": "Christmas",
  "letter.keyword3": "Valentine",
  "letter.keyword4": "Whteday",
  "letter.keyword5": "Anniversary",

  "step.selectDesign": "Design",
  "step.selectDesignEn": "Design",
  "step.writeMessage": "Message",
  "step.writeMessageEn": "Message",
  "step.customize": "Customize",
  "step.customizeEn": "Customize",

  "common.close": "Close",
  "common.select": "Select",
  "common.drag": "Drag",
  "common.sizeCustom": "Size",
  "common.next": "Next",
  "common.translate": "Translation",
  "common.back": "Back",
  "common.clear": "Clear",
};

export type LanguageKey = Readonly<keyof typeof en>;
export type Language = Record<LanguageKey, Readonly<string>>;

export default en;
