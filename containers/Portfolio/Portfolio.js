import useSWR from "swr";
import dynamic from "next/dynamic";
import { Box, Fade } from "@mui/material";
import { useRouter } from "next/router";
import { useUpdateEffect, useToggle } from "react-use";
import { useState, useEffect, useCallback, Fragment, useMemo } from "react";

import isEqual from "lodash/isEqual";
import TabPanel from "./components/TabPanel";
import PortfolioList from "./components/PortfolioList";
import { ROUTES } from "../../routes";
import { getElement } from "./utils";
import { TopBanner, LoadingIcon } from "../../components";
import { PAGES, PORTFOLIO_DETAIL } from "../../api";
import { useDevice } from "../../hooks";

const PortfolioDetailDialog = dynamic(() => import("./components/PortfolioDetailDialog"), {
  ssr: false,
});

const Portfolio = ({ portfolioDetailList, portfolioCategoryList }) => {
  const [data, setData] = useState(portfolioDetailList);
  const [loading, setLoading] = useState(false);
  const [currentPanel, setPanel] = useState(null);
  const router = useRouter();
  const [open, toggle] = useToggle(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSpecial, setIsSpecial] = useState(false);

  const { isMobile } = useDevice();

  const { data: resData } = useSWR(() => {
    if (currentPanel === null) {
      return;
    }
    return `${PAGES}?type=${PORTFOLIO_DETAIL}&child_of=${currentPanel}&fields=*`;
  });

  useEffect(() => {
    setPanel(router.query.portfolio);
    setSelectedCategory(getElement(router.query.portfolio, portfolioCategoryList.items));
  }, []);

  useEffect(() => {
    setIsSpecial(getElement(currentPanel, portfolioCategoryList?.items)?.is_special);
  }, [currentPanel]);

  useUpdateEffect(() => {
    if (resData?.items.length === 0 && data?.items.length === 0) {
      setLoading(false);
    }

    if (isEqual(resData, data)) {
      return;
    }
    setData(resData);
    setLoading(false);
  }, [resData, data]);

  const TopBannerMemo = useMemo(() => {
    if (!currentPanel) {
      return null;
    }

    const item = getElement(currentPanel, portfolioCategoryList?.items);

    if (isMobile) {
      return null;
    }

    return (
      <Fade
        in={true}
        timeout={{
          enter: 1000,
          exit: 1000,
        }}
      >
        <Box>
          <TopBanner imageSrc={item.banner} />
        </Box>
      </Fade>
    );
  });

  const onChange = useCallback((e, newValue) => {
    setLoading(true);
    setPanel(newValue);

    setSelectedCategory(getElement(newValue, portfolioCategoryList.items));

    const pathname = `${ROUTES.PORTFOLIO_CATEGORY}/${newValue}`;

    router.push(pathname, pathname, { shallow: true });
  }, []);

  const projectDetailHandler = useCallback((data) => {
    return () => {
      toggle(true);
      setSelectedPortfolio(data);
    };
  });

  if (currentPanel === null) {
    return <LoadingIcon />;
  }

  return (
    <Fragment>
      <Box
        sx={{
          position: "relative",
        }}
      >
        {TopBannerMemo}

        <TabPanel
          data={portfolioCategoryList}
          value={currentPanel}
          onChange={onChange}
          isSpecial={isSpecial}
        />
      </Box>

      <Box
        sx={{
          paddingBottom: 10,
          ...(isSpecial && {
            backgroundColor: "common.black",
          }),
        }}
      >
        <PortfolioList
          {...{
            loading,
            data,
            onClick: projectDetailHandler,
            isSpecial,
          }}
        />
      </Box>

      <PortfolioDetailDialog
        {...{ open, toggle, categoryMeta: selectedCategory, isSpecial, ...selectedPortfolio }}
      />
    </Fragment>
  );
};

export default Portfolio;
