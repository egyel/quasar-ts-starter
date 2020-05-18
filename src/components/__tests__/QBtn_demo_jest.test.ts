import { createLocalVue, shallowMount } from '@vue/test-utils';
import { Quasar, QBtn } from 'quasar';

import BtnTest from '../QBtn_demo.vue';

const localVue = createLocalVue();
localVue.use(Quasar, { components: { QBtn } });

// used `shallowMount` instead of `mount`, will stub all **registered** components into the template
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const factory = (propsData: any = {}) => shallowMount(BtnTest, {
  localVue,
  propsData,
});

describe('BtnTest', () => {
  const wrapper = factory();
  const { vm } = wrapper;

  // test('is a Vue instance', () => {
  //   const wrapper = factory(); // <= when no props are needed
  //   // const wrapper = factory({ propName: propValue }); <= when props are needed
  //   expect(wrapper.isVueInstance()).toBeTruthy();
  // });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // or
  test('accesses the shallowMount', () => {
    expect(vm.$el.textContent).toContain('rocket muffin');
    expect(wrapper.text()).toContain('rocket muffin'); // easier
    expect(wrapper.find('p').text()).toContain('rocket muffin');
  });

  it('sets the correct default data', () => {
    const defaultData = vm.$data;
    expect(defaultData).toStrictEqual({ counter: 0, input: 'rocket muffin' });
  });
});
