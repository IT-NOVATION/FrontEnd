import { useContext, useEffect, useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import AWS from "aws-sdk";
import ImageResize from "quill-image-resize";
import { ReviewDataContext } from "@pages/WriteReview/WriteReview";

Quill.register("modules/ImageResize", ImageResize);

const REGION = process.env.REACT_APP_AWS_S3_BUCKET_REGION;
const ACCESS_KEY = process.env.REACT_APP_AWS_S3_BUCKET_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_S3_BUCKET_SECRET_ACCESS_KEY;

function ReviewEditor() {
  const reviewDataContext = useContext(ReviewDataContext);
  const quillRef = useRef(null);
  const [value, setValue] = useState("");
  useEffect(() => {
    reviewDataContext?.setReviewData((prev) => {
      return { ...prev, reviewMainText: value };
    });
  }, [value]);

  const imageHandler = async () => {
    console.log("에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!");

    // 1. 이미지를 저장할 input type=file DOM을 만든다.
    const input = document.createElement("input");
    // 속성 써주기
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    // input이 클릭되면 파일 선택창이 나타난다.

    // input에 변화가 생긴다면 = 이미지를 선택
    input.addEventListener("change", async () => {
      console.log("온체인지");
      const file = input.files?.[0];
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
            Key: `reviewImgs/${date}`,
            Body: file,
          },
        });
        const IMG_URL = await upload.promise().then((res) => res.Location); //저장과 동시에 저장된 url을 가져온다
        const current = quillRef.current as any;
        const editor = current.getEditor(); // 에디터 객체 가져오기
        // 1. 에디터 root의 innerHTML을 수정해주기
        // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
        // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
        // editor.root.innerHTML =
        //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.

        // 2. 현재 에디터 커서 위치값을 가져온다
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (error) {
        console.log("오류 발생");
      }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
    };
  }, []);

  return (
    <ReactQuill
      ref={quillRef}
      style={{
        width: "100%",
        height: "1000px",
        margin: "0 0 100px 0",
        font: "inherit",
      }}
      placeholder="인상깊은 내용/배우에 대해 글을 작성해주세요!"
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
    />
  );
}
export default ReviewEditor;
