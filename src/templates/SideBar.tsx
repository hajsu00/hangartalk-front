

const SideBar = () => {
  return (
    // <!-- ボーダー（始まり） -->
    <>
      {/* <!-- ボーダー（始まり） --> */}
      <div className="max-w-screen-sm border-b-2 lg:border-none border-gray-200 py-2 mx-auto"></div><div className="max-w-screen-sm py-2 mx-auto"></div>
      {/* <!-- ボーダー（終わり） --> */}
      <div className="bg-gray-100 max-w-screen-sm mx-auto">
        <div className="w-full px-4">
          {/* <!-- ユーザーカード --> */}
          {/* <%= render partial: "layouts/sidebar/sidebar_user_card" %> */}
          {/* <!-- サイドバーメニュー --> */}
          <div className="py-8 px-4">
            <ul className="space-y-2">
              <li>
                {/* <%= link_to @current_user do %>
      <%= render partial: "layouts/sidebar/sidebar_menu", locals: { fontawesome_class: "fa-solid fa-house-user", item: "ダッシュボード" } %>
    <% end %> */}
              </li>
              <li>
                {/* <%= link_to microposts_path() do %>
      <%= render partial: "layouts/sidebar/sidebar_menu", locals: { fontawesome_class: "fa-solid fa-comments", item: "フィード" } %>
    <% end %> */}
              </li>
              <li>
                {/* <%= link_to user_licenses_path(@current_user) do %>
      <%= render partial: "layouts/sidebar/sidebar_menu", locals: { fontawesome_class: "fa-solid fa-id-card", item: "保有ライセンス管理" } %>
    <% end %> */}
              </li>
              <li>
                {/* <%= link_to gliderflights_path do %>
      <%= render partial: "layouts/sidebar/sidebar_menu", locals: { fontawesome_class: "fa-solid fa-book-open", item: "フライトログブック" } %>
    <% end %> */}
              </li>
              <li>
                {/* <%= link_to groups_path do %>
      <%= render partial: "layouts/sidebar/sidebar_menu", locals: { fontawesome_class: "fa-solid fa-user-group", item: "フライトクラブ" } %>
    <% end %> */}
              </li>
            </ul>
          </div>
        </div>
      </div></>
  )
}

export default SideBar