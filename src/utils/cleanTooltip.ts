export function champParseTooltip(tooltip: string): string {
    let cleanTooltip = tooltip.replace(/[^가-힣\s]/g, " ");
    return cleanTooltip;
  }

export function itemParseTooltip(tooltip: string): string {
    let cleanTooltip = tooltip
    .replace(/<subtitleLeft>.*?<[^>]*>([^<]*)<\/[^>]*>.*?<\/subtitleLeft>/g, "($1)") // 괄호로 감싸기
    .replace(/<\/?[^>]+(>|$)|@[^ ]+/g, "");
    return cleanTooltip.trim();
  }