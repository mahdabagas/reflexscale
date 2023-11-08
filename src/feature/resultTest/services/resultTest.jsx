import { createAxiosInstance } from "../../api/AxiosInstance";

const axiosInstance = createAxiosInstance();

const resultTest = async (token, poin) => {
  try {
    const result = await axiosInstance
      .post(
        "/hasil-test",
        JSON.stringify({
          poin,
        }),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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

export { resultTest };
