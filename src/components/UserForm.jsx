import { useFormik } from 'formik';
import styles from './UserForm.module.scss';
import * as Yup from 'yup';

function UserForm() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            description: '',
            notSendEmail: false,
            confirmEmail: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, 'First name must be min 2 characters')
                .max(50, 'First name must be max 50 characters')
                .required('First name is required'),
            lastName: Yup.string()
                .min(2, 'Last name must be min 2 characters')
                .max(50, 'Last name must be max 50 characters')
                .required('Last name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            confirmEmail: Yup.boolean()
                .oneOf([true], 'Confirm email must be true'),
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return(
        <div>
            <form onSubmit={formik.handleSubmit} className={styles.container}>
                <label
                    htmlFor="firstName"
                    className={formik.touched.firstName && formik.errors.firstName ? styles.error : null}
                >
                    First Name
                </label>
                <input
                    className={formik.touched.firstName && formik.errors.firstName ? styles.error : null}
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                <label
                    className={formik.touched.lastName && formik.errors.lastName ? styles.error : null}
                    htmlFor="lastName"
                >
                    Last Name
                </label>
                <input
                    className={formik.touched.lastName && formik.errors.lastName ? styles.error : null}
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                <label
                    htmlFor="email"
                    className={formik.touched.email && formik.errors.email ? styles.error : null}
                >
                    Email Address
                </label>
                <input
                    className={formik.touched.email && formik.errors.email ? styles.error : null}
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label
                    htmlFor="description"
                    className={formik.touched.description && formik.errors.description ? styles.error : null}
                >
                    Description
                </label>
                <textarea
                    className={formik.touched.description && formik.errors.description ? styles.error : null}
                    id="description"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />firstName
                <label
                    htmlFor="notSendEmail"
                >
                    Don't send me promotional emails
                </label>
                <input
                    id="notSendEmail"
                    name="notSendEmail"
                    type="checkbox"
                    onChange={formik.handleChange}
                    value={formik.values.notSendEmail}
                    checked={formik.values.notSendEmail}
                />
                <label
                    htmlFor="confirmEmail"
                    className={formik.touched.confirmEmail && formik.errors.confirmEmail ? styles.error : null}
                >
                    Confirm sending my email
                </label>
                <input
                    className={formik.touched.confirmEmail && formik.errors.confirmEmail ? styles.error : null}
                    id="confirmEmail"
                    name="confirmEmail"
                    type="checkbox"
                    onChange={formik.handleChange}
                    value={formik.values.confirmEmail}
                    checked={formik.values.confirmEmail}
                />
                <button type="submit">Submit</button>
                {formik.touched.firstName && formik.errors ? (
                    <div className={styles.error}>
                        <p>{formik.errors.firstName}</p>
                        <p>{formik.errors.lastName}</p>
                        <p>{formik.errors.email}</p>
                        <p>{formik.errors.description}</p>
                        <p>{formik.errors.notSendEmail}</p>
                        <p>{formik.errors.confirmEmail}</p>
                    </div>
                ) : null}
            </form>
        </div>
    );
}

export default UserForm;
