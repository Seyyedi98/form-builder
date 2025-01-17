import { checkboxFieldFormElement } from "./fields/checkbox-field";
import { DateFieldFormElement } from "./fields/DateField";
import { NumberFieldFormElement } from "./fields/number-field";
import { ParagraphFieldFormElement } from "./fields/paragraph-filed";
import { SelectFieldFormElement } from "./fields/SelectField";
import { SeparatorFieldFormElement } from "./fields/separator";
import { SpacerFieldFormElement } from "./fields/spacer-filed";
import { SubtitleFieldFormElement } from "./fields/sub-title-filed";
import { TextAreaFieldFormElement } from "./fields/text-area-field";
import { TextFieldFormElement } from "./fields/text-field";
import { TitleFieldFormElement } from "./fields/title-field";

export const FormElements = {
  TextField: TextFieldFormElement,
  TitleField: TitleFieldFormElement,
  SubtitleField: SubtitleFieldFormElement,
  ParagraphField: ParagraphFieldFormElement,
  SeparatorField: SeparatorFieldFormElement,
  SpacerField: SpacerFieldFormElement,
  NumberField: NumberFieldFormElement,
  TextAreaField: TextAreaFieldFormElement,
  DateField: DateFieldFormElement,
  SelectField: SelectFieldFormElement,
  CheckboxField: checkboxFieldFormElement,
};
