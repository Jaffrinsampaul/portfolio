export default function navigateToDiv(tagName: string) {
    const tagOffset: any = document.getElementById(tagName)?.offsetTop;
    window.scrollTo({
      top: tagOffset - 100,
      behavior: "smooth",
    });
  }