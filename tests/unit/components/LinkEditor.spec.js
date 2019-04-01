import { shallowMount } from "@vue/test-utils";
import LinkEditor from "@/components/LinkEditor.vue";

describe("LinkEditor.vue", () => {
  it("doesn't render inputs when an item is passed", () => {
    const wrapper = shallowMount(LinkEditor, {
      propsData: {
        item: {}
      }
    });
    expect(wrapper.findAll('input').length).toBe(0);
  });

  it("renders item's data", () => {
    const wrapper = shallowMount(LinkEditor, {
      propsData: {
        item: {
          title: 'titleTest',
          link: 'linkTest'
        }
      }
    });
    expect(wrapper.find('.title').text()).toContain('titleTest');
    expect(wrapper.find('.link').text()).toContain('linkTest');
  });
  
  it("renders 2 text inputs when no item is passed", () => {
    const wrapper = shallowMount(LinkEditor, {
      propsData: {}
    });
    expect(wrapper.findAll('input').length).toBe(2);
  });

  it("replaces the heading element with an input when an item is passed and the title is clicked", () => {
    const wrapper = shallowMount(LinkEditor, {
      propsData: {
        item: {
          title: '',
          link: ''
        }
      }
    });
    wrapper.find('.title > *').trigger('click')
    expect(wrapper.findAll('.title > h3').length).toBe(0);
    expect(wrapper.findAll('.title > input').length).toBe(1);
  });

  it("replaces the heading element with an input when an item is passed and the link is clicked", () => {
    const wrapper = shallowMount(LinkEditor, {
      propsData: {
        item: {
          title: '',
          link: ''
        }
      }
    });
    wrapper.find('.link > *').trigger('click')
    expect(wrapper.findAll('.link > h3').length).toBe(0);
    expect(wrapper.findAll('.link > input').length).toBe(1);
  });

  it("replaces the input element with an heading when an item is passed and the title is submited", () => {
    const wrapper = shallowMount(LinkEditor, {
      propsData: {
        item: {
          title: '',
          link: ''
        }
      }
    });
    wrapper.find('.title > *').trigger('click')
    expect(wrapper.findAll('.title > h3').length).toBe(0);
    expect(wrapper.findAll('.title > input').length).toBe(1);
  });
});