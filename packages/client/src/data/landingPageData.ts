
import type { SeoProps } from "src/helper/components"


interface LandingPageProps {
  seo: SeoProps
}


export const landingPageData: LandingPageProps = {
  seo: {
    title: 'Home Page',
    description: "This is the home page of the impatient care app ",
    imageUrl: "",
    pathname: "/"
  }
}