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
import { useDevice, useGlobal } from "../../hooks";
import { SEO } from "../../hoc";

const PortfolioDetailDialog = dynamic(() => import("./components/PortfolioDetailDialog"), {
  ssr: false,
});

const Portfolio = ({ portfolioDetailList, portfolioCategoryList }) => {
  const router = useRouter();
  const context = useGlobal();
  const { isMobile } = useDevice();
  const [open, toggle] = useToggle(false);
  const [loading, setLoading] = useState(false);
  const [currentPanel, setPanel] = useState(null);
  const [data, setData] = useState(portfolioDetailList);
  const [isSpecial, setIsSpecial] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  console.log("");
  console.log(selectedPortfolio, selectedCategory);

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
    const is_special = getElement(currentPanel, portfolioCategoryList?.items)?.is_special;
    setIsSpecial(is_special);

    context.set((prev) => {
      return {
        ...prev,
        isSpecial: is_special,
      };
    });
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
          <TopBanner imageSrc={item.banner} width="100%" objectFit="cover" />
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
      <SEO data={(open && selectedPortfolio.meta) || selectedCategory.meta} />

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
