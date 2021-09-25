import React from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import "react-summernote/lang/summernote-id-ID";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tooltip";

const TextEditor = (props) => {
  const { initialData = "", getData, onBlur } = props;
  const [content, setContent] = React.useState(initialData);

  const initial = () => {
    setContent(initialData);
    getData(initialData);
  };

  React.useEffect(initial, [initialData]);

  return (
    <React.Fragment>
      <ReactSummernote
        value={content}
        options={{
          lang: "id-ID",
          height: 450,
          dialogsInBody: true,
          toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["fontname", ["fontname"]],
            ["color", ["color"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
          ],
        }}
        onChange={(e) => {
          setContent(e);
          getData(e);
        }}
        onImageUpload={(files) => {
          let node = document.createElement("img");
          let fr = new FileReader();
          fr.onload = () => {
            node.setAttribute("src", fr.result);
            ReactSummernote.insertNode(node);
          };
          fr.readAsDataURL(files[0]);
        }}
        onBlur={onBlur}
      />
    </React.Fragment>
  );
};

export default injectIntl(connect(null, null)(TextEditor));
