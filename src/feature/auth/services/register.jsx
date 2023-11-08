import { createAxiosInstance } from "../../api/AxiosInstance";

const axiosInstance = createAxiosInstance();

const register = async ({
  nama_lengkap,
  email,
  usia,
  jenis_kelamin,
  alamat,
  password,
  verif_password,
}) => {
  try {
    const result = await axiosInstance
      .post(
        "/register",
        JSON.stringify({
          nama_lengkap,
          email,
          usia,
          jenis_kelamin,
          alamat,
          password,
          verif_password,
        })
      )
      .then((result) => {
        return result;
      })
      .catch((result) => {
        return result;
      });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export { register };
