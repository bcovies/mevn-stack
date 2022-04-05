import React from 'react';
// import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const validationSchema = yup.object({
  email: yup
    .string('Coloque seu email.')
    .email('Este email não é valido!')
    .required('É necessário preencher um email para continuar!!'),
  password: yup
    .string('Entre com uma senha.')
    .min(8, 'Sua senha deve ter no mínimo 8 caracteres.')
    .required('Uma senha é necessário para continuar!!'),
  phone: yup
    .string('Entre com o número de telefone.')
    .min(11, 'Seu telefone deve seguir o exemplo dd999999999')
    .required('O telefone é necessário para continuar. Necessário para confirmação da conta.')
});

const SingUp = () => {
  const formik = useFormik({
    initialValues: {
      email: 'exemplo@email.com.br',
      password: 'UmaS3nhaQualq3r',
      phone: '22984568734',
      dob: '2001-12-30'
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8080/user/signup',
        data: values
      }).then(function (response) {
        console.log(values)
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Senha"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Telefone Celular"
          type="number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <TextField
          fullWidth
          id="dbo"
          name="dob"
          label="Data de Nascimento"
          type="date"
          value={formik.values.dob}
          onChange={formik.handleChange}
          error={formik.touched.dob && Boolean(formik.errors.dob)}
          helperText={formik.touched.dob && formik.errors.dob}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SingUp;