import useSWR from "swr";
import { Box, Fade } from "@mui/material";
import { useRouter } from "next/router";
import { useUpdateEffect, useToggle } from "react-use";
import { useState, useEffect, useCallback, Fragment, useMemo } from "react";

import isEqual from "lodash/isEqual";
import TabPanel from "./components/TabPanel";
import PortfolioList from "./components/PortfolioList";
import PortfolioDetailDialog from "./components/PortfolioDetailDialog";
import { ROUTES } from "../../routes";
import { getElement } from "./utils";
import { TopBanner, LoadingIcon } from "../../components";
import { PAGES, PORTFOLIO_DETAIL } from "../../api";
import { useDevice, useGlobal, useParams } from "../../hooks";
import { SEO } from "../../hoc";

import { transformUrl } from "../../libs";

const Portfolio = ({ initData }) => {
  const [portfolioDetailList, portfolioCategoryList] = initData;

  const router = useRouter();

  const context = useGlobal();
  const { isMobile } = useDevice();

  const [currentPanel, setPanel] = useState(router.query.portfolio);
  const [data, setData] = useState(portfolioDetailList);

  const [isSpecial, setIsSpecial] = useState(false);
  const [topBannerEffect, setTopBannerEffect] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState(
    getElement(router.query.portfolio, portfolioCategoryList.items)
  );

  const [params, setParams] = useParams({
    initState: router.query,
  });

  const [selectedPortfolio, setSelectedPortfolio] = useState(() => {
    const id = router.query.id;

    if (id && portfolioDetailList) {
      const { items } = portfolioDetailList;

      const [filteredItem] = items.filter((el) => {
        return el.id == id;
      });

      return filteredItem;
    } else {
      return null;
    }
  });

  const [open, toggle] = useToggle(selectedPortfolio ? true : false);

  const { data: resData } = useSWR(() => {
    if (currentPanel === null) {
      return;
    }

    return transformUrl(PAGES, {
      type: PORTFOLIO_DETAIL,
      child_of: currentPanel,
      fields: "*",
    });
  });

  const [loading, setLoading] = useState(resData ? false : true);

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
        in={topBannerEffect}
        timeout={{
          enter: 1000,
          exit: 0,
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
    setTopBannerEffect(false);

    const timer = setTimeout(() => {
      setTopBannerEffect(true);
    }, 250);

    setSelectedCategory(getElement(newValue, portfolioCategoryList?.items));

    setParams({
      portfolio: newValue,
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const projectDetailHandler = useCallback((data) => {
    return () => {
      toggle(true);

      setParams({
        id: data.id,
      });
      setSelectedPortfolio(data);
    };
  }, []);

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
          topBannerEffect={topBannerEffect}
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
        {...{
          open,
          toggle,
          categoryMeta: selectedCategory,
          isSpecial,
          setParams,
          ...selectedPortfolio,
        }}
      />
    </Fragment>
  );
};

export default Portfolio;
