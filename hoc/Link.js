import { forwardRef } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

const Link = forwardRef(function (props, ref) {
  const {
    activeClassName = "active",
    as: linkAs,
    className: classNameProps,
    href,
    noLinkStyle,
    ...others
  } = props;

  const router = useRouter();
  const pathname = typeof href === "string" ? href : router.pathname;
  const className = classNames(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  // is it external link

  const isExternal =
    typeof href === "string" &&
    (href.indexOf("http") === 0 ||
      (href.indexOf("mailto:") === 0 && href.indexOf("tel:") === 0));

  if (isExternal) {
    if (noLinkStyle) {
      return (
        <a
          style={{
            textDecoration: "none",
          }}
          className={className}
          href={href}
          ref={ref}
          {...others}
        />
      );
    } else {
      return <MuiLink className={className} href={href} ref={ref} {...others} />;
    }
  } else {
    if (noLinkStyle) {
      return <NextLinkComposed className={className} ref={ref} to={href} {...others} />;
    } else {
      return (
        <MuiLink
          component={NextLinkComposed}
          className={className}
          to={href}
          ref={ref}
          {...others}
        />
      );
    }
  }
});

const NextLinkComposed = forwardRef((props, ref) => {
  const { to, linkAs, replace, scroll, passHref, shallow, prefetch, locale, ...other } =
    props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      locale={locale}
    >
      <a ref={ref} {...other} />
    </NextLink>
  );
});

export default Link;
