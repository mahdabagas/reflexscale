import { createAxiosInstance } from "../../api/AxiosInstance";

const axiosInstance = createAxiosInstance();

const login = async ({ email, password }) => {
  try {
    const result = await axiosInstance
      .post(
        "/login",
        JSON.stringify({
          email,
          password,
        })
      )
      .then((result) => {
        return result;
      })
      .catch((result) => {
        return result;
      });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export { login };
