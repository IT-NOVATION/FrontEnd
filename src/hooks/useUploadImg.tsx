import AWS from "aws-sdk";

const REGION = process.env.REACT_APP_AWS_S3_BUCKET_REGION;
const ACCESS_KEY = process.env.REACT_APP_AWS_S3_BUCKET_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_S3_BUCKET_SECRET_ACCESS_KEY;
const CLOUD_FRONT_URL = "http://d1yzu8dcirp0jm.cloudfront.net/";

// aws에 파일 업로드하고 가져오는 하는 로직이 특정 컴포넌트에 존재하는 것보다 분리하는 것이 낫다고 판단했습니다
function useUploadImg(setImg: React.Dispatch<React.SetStateAction<string>>) {
  const uploadImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.currentTarget?.files?.[0];
    const formData = new FormData();
    formData.append("img", file as any);
    try {
      AWS.config.update({
        region: REGION,
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY,
      });
      const date = Date.now();
      const upload = new AWS.S3.ManagedUpload({
        params: {
          ACL: "public-read",
          Bucket: "itsmovietime",
          Key: `profileImgs/${date}`,
          Body: file,
        },
      });
      const url_key = await upload.promise().then((res) => res.Key);
      setImg(CLOUD_FRONT_URL + url_key);
    } catch (error) {
      console.log(error);
    }
  };
  return uploadImg;
}

export default useUploadImg;
