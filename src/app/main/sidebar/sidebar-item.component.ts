export const SidebarItem = {
  bindings: {
    page: '<'
  },
  
  template: `
    <a class="list-item" 
      ui-sref="{{ ::$ctrl.page.url }}">
        {{ ::$ctrl.page.name }}
    </a>`
};
  
