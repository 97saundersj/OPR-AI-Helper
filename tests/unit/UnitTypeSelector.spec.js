import { shallowMount } from '@vue/test-utils'
import DecisionStep from '@/components/DecisionTree/DecisionStep/DecisionStep.vue'

describe('UnitTypeSelector.vue', () => {
  var wrapper
  var choiceText = "Example Choice?"

  beforeEach(() => {
    wrapper = shallowMount(DecisionStep, {
      propsData: {
        requiredStepsMet: true,
        useArrow: true,
        choiceText: choiceText
      }
    })
  })

  it('Renders correctly with all props specified', () => {

    // Check Arrow Exists
    var arrow = wrapper.find(".arrow")
    expect(arrow.exists()).toBeTruthy()

    // Check choice Text
    var cardHeader = wrapper.find(".decision-card .card-header")
    expect(cardHeader.exists()).toBeTruthy()
    expect(cardHeader.text()).toMatch(choiceText)

    // Check Buttons
    var decisionOptions = wrapper.find(".decision-card .decision-options")
    expect(decisionOptions.exists()).toBeTruthy()

    var btnYes = decisionOptions.find("[data-cy='btn-yes']")
    expect(btnYes).toBeTruthy()
    expect(btnYes.text()).toMatch("Yes")

    var btnNo = decisionOptions.find("[data-cy='btn-no']")
    expect(btnNo).toBeTruthy()
    expect(btnNo.text()).toMatch("No")

  })
})
