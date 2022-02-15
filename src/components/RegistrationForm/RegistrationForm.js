import "./RegistrationForm.css";
import React from "react";
// import { render } from "react-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";
import TranslatableText from "../../context/TranslatableText";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Not valid")
      .required("First name is required."),
    lastName: Yup.string()
      .min(2, "Not valid")
      .required("Last name is required."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    stateID: Yup.string()
    .min(2, "Not valid")
    .required("state id is required!"),
    birthdate: Yup.string()
      .email("Invalid date ") //recheck
      .required("Date is required!"),
    citizenship: Yup.string()
      .min("2")
      .required("Citizenship is required!"),
    city: Yup.string()
      .min("2")
      .required("City is required!"),
    organization: Yup.string()
      .min("2")
      .required("Organization is required!"),
    degree: Yup.string()
      .min("2")
      .required("Degree is required!"),
    yearDegree: Yup.number()
      .min("")
      .required("Field is required!"),
    spravka: Yup.string()
      .min("2")
      .required("Spravka is required!"),
    language: Yup.string()
      .min("2")
      .required("Language is required!"),
    prog_language: Yup.string()
      .min("2")
      .required("Selection is required!"),
    resume: Yup.string()
      .min("2")
      .required("CV is required!"),
    motivation: Yup.string()
      .min("5")
      .required("Motivational letter is required!")
  }),

  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    alert(payload.email);
    setSubmitting(false);
  },
  displayName: "MyForm"
});

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error
    },
    className
  );
  return (
    <div className="registration" id="registration">
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
    </div>

  );
};
const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting
  } = props;
  return (
    <div>
    <h1>
    <TranslatableText
             dictionary={{ english: "Registration Form: ", russian: "Форма для регистрации", kazakh: "Тіркелу формасы" }}
        /> 
    </h1>
    <form onSubmit={handleSubmit}>
      <TextInput
        id="firstName"
        type="text"
        label={<TranslatableText dictionary={{ english: "First name", russian: "Имя", kazakh: "Есімі" }} /> }
        error={touched.firstName && errors.firstName}
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="lastName"
        type="text"
        label= {<TranslatableText dictionary={{ english: "Last name", russian: "Фамилия", kazakh: "Тегі" }} /> }
        error={touched.lastName && errors.lastName}
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="email"
        type="email"
        label={<TranslatableText dictionary={{ english: "Email", russian: "Электронная почта", kazakh: "Электронды пошта" }} /> }
        // placeholder={<TranslatableText dictionary={{ english: "Enter your email", russian: "Введите адрес электронной почты", kazakh: "Электронды поштаңызды енгізіңіз" }} /> }
        error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextInput
        id="birthDate"
        type="date"
        label={<TranslatableText dictionary={{ english: "Date of birth", russian: "Дата рождения", kazakh: "Туған күні" }} /> }
        error={touched.birthDate && errors.birthDate}
        value={values.birthDate}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextInput
        id="stateID"
        type="text"
        label={<TranslatableText dictionary={{ english: "Your state ID", russian: "Удостовенение личности", kazakh: "Жеке куәлік" }} /> }
        // placeholder={<TranslatableText dictionary={{ english: "Link", russian: "Ссылка", kazakh: "Сілтеме" }} /> }
        error={touched.stateID && errors.stateID}
        value={values.stateID}
        onChange={handleChange}
        onBlur={handleBlur}
      /> 

      <TextInput
        id="citizenship"
        type="text"
        label={<TranslatableText dictionary={{ english: "Citizenship", russian: "Гражданство", kazakh: "Азаматтығы" }} /> }
        error={touched.citizenship && errors.citizenship}
        value={values.citizenship}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextInput
        id="city"
        type="text"
        label={<TranslatableText dictionary={{ english: "City of residence", russian: "Город проживания", kazakh: "Қала" }} /> }
        error={touched.city && errors.city}
        value={values.city}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextInput
        id="organization"
        type="text"
        label={<TranslatableText dictionary={{ english: "University or School organization name", russian: "Название университета или города", kazakh: "Университет немесе мектеп атауы" }} /> }
        error={touched.organization && errors.organization}
        value={values.organization}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextInput
        id="degree"
        type="text"
        label={<TranslatableText dictionary={{ english: "Currently pursuing degree ", russian: "Ваша текущая степень", kazakh: "Қазіргі алып жатырған дәрежеңіз" }} /> }
        // placeholder={<TranslatableText dictionary={{ english: "High School/Bachelors/Masters/PhD", russian: "Среднее/Бакалавр/Магистратура/PhD", kazakh: "Орта білім/Бакалавр/Магистратура/PhD" }} /> }
        error={touched.degree && errors.degree}
        value={values.degree}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextInput
        id="yearDegree"
        type="number"
        label={<TranslatableText dictionary={{ english: "Years completed towards degree ", russian: "Текущий год обучения", kazakh: "Оқу жылы" }} /> }
        error={touched.yearDegree && errors.yearDegree}
        value={values.yearDegree}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextInput
        id="spravka"
        type="text"
        label={<TranslatableText dictionary={{ english: "Official Transcript or Enrollment verification (Spravka)", russian: "Официальный транскрипт или справка о зачислении ", kazakh: "Ресми транскрипт немесе қабылдану туралы анықтама" }} /> }
        // placeholder={<TranslatableText dictionary={{ english: "Link", russian: "Ссылка", kazakh: "Сілтеме" }} /> }
        error={touched.spravka && errors.spravka}
        value={values.spravka}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextInput
        id="language"
        type="text"
        label={<TranslatableText dictionary={{ english: "Contest language preference", russian: "Предпочтительный язык марафона", kazakh: "Марафон тілін таңдаңыз" }} /> }
        // placeholder={<TranslatableText dictionary={{ english: "English/Russian/Kazakh", russian: "Английский/Русский/Казахский", kazakh: "Ағылшын тілі/Орыс тілі/Қазақ тілі" }} /> }
        error={touched.language && errors.language}
        value={values.language}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextInput
        id="prog_language"
        type="text"
        label={<TranslatableText dictionary={{ english: "Programming language preference", russian: "Предпочтительный язык программирования", kazakh: "Бағдарламалау тілін таңдаңыз" }} /> }
        // placeholder={<TranslatableText dictionary={{ english: "Can be multiple", russian: "Может быть несколько", kazakh: "Бірнеше болуы мүмкін" }} /> }
        error={touched.prog_language && errors.prog_language}
        value={values.prog_language}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextInput
        id="resume"
        type="text"
        label={<TranslatableText dictionary={{ english: "CV or Resume", russian: "CV или резюме", kazakh: "CV немесе түйіндеме" }} /> }
        // placeholder={<TranslatableText dictionary={{ english: "Link", russian: "Ссылка", kazakh: "Сілтеме" }} /> }
        error={touched.resume && errors.resume}
        value={values.resume}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextInput
        id="motivation"
        type="text"
        label={<TranslatableText dictionary={{ english: "Motivational letter", russian: "Мотивационное письмо", kazakh: "Мотивациялық хат" }} /> }
        // placeholder={<TranslatableText dictionary={{ english: "No more than 150 words", russian: "Не больше 150 слов", kazakh: "150 сөзден артық емес" }} /> }
        error={touched.motivation && errors.motivation}
        value={values.motivation}
        onChange={handleChange}
        onBlur={handleBlur}
      />


      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        {<TranslatableText dictionary={{ english: "Reset", russian: "Сбросить", kazakh: "Reset" }} /> }
      </button>
      <button type="submit" disabled={isSubmitting}>
      {<TranslatableText dictionary={{ english: "Submit", russian: "Отправить", kazakh: "Жіберу" }} /> }
      </button>
      {/* <DisplayFormikState {...props} /> */}
    </form>
    </div>
  );
};

const MyEnhancedForm = formikEnhancer(MyForm);

export default MyEnhancedForm;

// Helper for the demo
// import { DisplayFormikState } from "./formik-demo";

// const App = () => (
//   <div className="app">
//     <MyEnhancedForm user={{ email: "", firstName: "", lastName: "" }} />
//   </div>
// );

// render(<App />, document.getElementById("root"));
