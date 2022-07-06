import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ShippingForm = ({ onChange, refId }) => {
  const formik = useFormik({
    initialValues: {
        nume: "",
        prenume:"",
        email: "",
        telefon: "",
        adresa: "",
        localitate: "",
        judet: "",
        codPostal:"",
    },
    validationSchema: Yup.object({
        nume: Yup.string().required("Acest camp este obligatoriu"),
        prenume: Yup.string().required("Acest camp este obligatoriu"),
        email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
        telefon: Yup.string()
        .required("Acest camp este obligatoriu")
        .min(6, "At least 06 characters"),
        adresa: Yup.string().required("Acest camp este obligatoriu"),
        localitate: Yup.string().required("Acest camp este obligatoriu"),
        judet: Yup.string().required("Acest camp este obligatoriu"),
        codPostal: Yup.string().required("Acest camp este obligatoriu"),
    }),
    onSubmit: () => {
      watchForm();
    }
  })

  // React.useEffect(() => {
  //   watchForm();
  // }, [formik.values, formik.errors]);

  React.useImperativeHandle(refId, () => ({
    Submit: async () => {
      await formik.submitForm()
    }
  }));

  function watchForm() {
    if (onChange) {
      onChange({
        values: formik.values,
        validated: formik.isSubmitting
          ? Object.keys(formik.errors).length === 0
          : false
      })
    }
  }

  return (
    <section className="shipping">
        <form ref={refId}>
            <h2>Livrare</h2>
            <div className="personalInfo">
                <div>
                    <label>Nume </label>
                    <input
                        name="nume"
                        value={formik.values.nume}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                </div>

                <div>
                    <label>Prenume </label>
                    <input
                        name="prenume"
                        value={formik.values.prenume}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                </div>

                <div>
                    <label>Email </label>
                    <input
                        name="email"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />

                </div>

                <div>
                    <label>Telefon </label>
                    <input
                        name="telefon"
                        value={formik.values.telefon}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />

                </div>
                <div>
                    <label>Adresa </label>
                    <input
                        name="adresa"
                        value={formik.values.adresa}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />

                </div>
                <div>
                    <label>Localitate </label>
                    <input
                        name="localitate"
                        value={formik.values.localitate}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />

                </div>
                <div>
                    <label>Judet </label>
                    <input
                        name="judet"
                        value={formik.values.judet}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />

                </div>
                <div>
                    <label>Cod postal </label>
                    <input
                        name="codPostal"
                        value={formik.values.codPostal}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />

                </div>

                </div>
            </form>
            
    </section>
  );
};

export default ShippingForm;
