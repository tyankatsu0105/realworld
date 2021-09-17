export const hasActiveClass = (params: {
  activeClass: string;
  className: string | undefined;
}) => params.className?.includes(params.activeClass) ?? false;
