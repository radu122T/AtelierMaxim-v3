import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const PaymentForm = ({ onChange, refId }) => {
    const formik = useFormik({
        initialValues: {
            nume: "",
            prenume:"",
            adresa: "",
            localitate: "",
            judet: "",
            codPostal:"",
    },
        validationSchema: Yup.object({
            nume: Yup.string().required("Acest camp este obligatoriu"),
            prenume: Yup.string().required("Acest camp este obligatoriu"),
            adresa: Yup.string().required("Acest camp este obligatoriu"),
            localitate: Yup.string().required("Acest camp este obligatoriu"),
            judet: Yup.string().required("Acest camp este obligatoriu"),
            codPostal: Yup.string().required("Acest camp este obligatoriu"),
    }),
    onSubmit: () => {
        watchForm();
    }
    });

    React.useImperativeHandle(refId, () => ({
        Submit: async () => {
            await formik.submitForm();
    }
    }));

    function watchForm() {
        if (onChange) {
            onChange({
                values: formik.values,
                validated: formik.isSubmitting
                ? Object.keys(formik.errors).length === 0
                : false
        });
    }
    }

    return (
        <section className="payment">
            <form ref={refId}>
                <div className="personalInfo">
                    <h2>Facturare</h2>
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

export default PaymentForm;
