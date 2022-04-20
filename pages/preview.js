import axios from "axios";
import queryString from "query-string";
import DOMPurify from "isomorphic-dompurify";
import { PREVIEW_PAGE } from "../api";

import { Stack, Box } from "@mui/material";

import { GridContainer } from "../components";

import { useGlobal } from "../hooks";

const PreviewPage = ({ previewData = {} }) => {
  const { body } = previewData;
  const context = useGlobal();

  return (
    <Box
      sx={{
        marginTop: `${context?.state?.headerHeight}px`,
        paddingY: 3,
      }}
    >
      {body?.map((el, idx) => {
        const { block_type, value } = el;

        if (block_type === "richtext") {
          const { content, text_color, text_alignment } = value;

          return (
            <GridContainer key={idx}>
              <div
                style={{
                  color: text_color,
                  textAlign: text_alignment,
                  wordWrap: "break-word",
                }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(content),
                }}
              ></div>
            </GridContainer>
          );
        } else if (block_type === "images") {
          return (
            <Stack key={idx} direction="row">
              {value.map((el, idx) => {
                return (
                  <img
                    key={idx}
                    src={el}
                    style={{
                      width: `${100 / value.length}%`,
                      objectFit: "contain",
                    }}
                  />
                );
              })}
            </Stack>
          );
        } else {
          return null;
        }
      })}
    </Box>
  );
};

export default PreviewPage;

export async function getServerSideProps(context) {
  let data = {};

  const params = {
    ...context.query,
    fields: "*",
  };

  try {
    const { data: resData } = await axios.get(`${PREVIEW_PAGE}/?${queryString.stringify(params)}`);
    data = {
      previewData: resData,
    };
  } catch (err) {
    data = {
      error: err.message,
    };
  } finally {
    return {
      props: data,
    };
  }
}
