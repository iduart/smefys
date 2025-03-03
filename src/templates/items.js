import React from "react"
import { graphql } from "gatsby"
import LayoutOrder from "../components/Layouts/LayoutOrder"
import withAuthenticator from "../hoc/withAuthenticator"
import MenuItem from "../components/MenuItem/MenuItem"
import { ContentBody } from "../components/Layouts/Common"

const ItemsPage = ({ data }) => {
  const { menuItems } = data.api
  return (
    <LayoutOrder>
      <ContentBody>
        {menuItems.map(item => (
          <MenuItem key={item._id} item={item} />
        ))}
      </ContentBody>
    </LayoutOrder>
  )
}

export const query = graphql`
  query getMenuItems($categoryId: ID!) {
    api {
      menuItems: getItemsByCategory(categoryId: $categoryId) {
        _id
        name
        price
      }
    }
  }
`

export default withAuthenticator(ItemsPage)
