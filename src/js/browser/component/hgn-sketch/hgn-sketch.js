import * as marked from 'marked';

export const DESCRIPTION_REG_EXP = RegExp('\\#\\#\\#\\s+Description\\s+');
export const SCENARIO_REG_EXP = RegExp('\\#\\#\\#\\s+Scenario\\s+');

export function getSketch () {
  let details, result;
  details = {
    content: MARKDOWN,
    scenarios: [],
  };
  parseSections (details);

  result = {
    scenarios: details.scenarios,
    markdown: marked.parse (MARKDOWN),
  }
  // return marked.parse(MARKDOWN);
  return result;
}

export function parseSections (details) {
  let { content } = details;
  details.fragment = content;
  parseDescription (details);
}

export function parseDescription (details) {
  let { fragment } = details;
  parseAcceptanceCriteria (details);
}

export function parseAcceptanceCriteria (details) {
  let { fragment } = details;
  parseScenario (details);
}

export function parseScenario (details) {
  let { fragment } = details;
  let end, found, hasMoreScenarios, match, scenario, start;

  found = SCENARIO_REG_EXP.exec (fragment);
  if (found) {
    start = found.index;
    match = found [0];
    end = fragment.length;
    fragment = fragment.substring (match.length);

    found = SCENARIO_REG_EXP.exec (fragment);
    if (found) {
      end = found.index;
      // end = fragment.length;
      hasMoreScenarios = true;
    }

    scenario = match + fragment.substring (0, end).trim ();
    if (scenario) {
      details.scenarios.push (marked.parse(scenario));
    }
    // console.log('- SCENARIO', scenario);

    fragment = fragment.substring (end);
    details.fragment = fragment;
    // console.log('HERE', fragment);


    if (hasMoreScenarios) {
      parseScenario (details);
    }
  }
}

export const MARKDOWN = `
### Scenario 1: Hide Next Payment Card - Autopay Enrolled

* **Given:** a member is on the Loan Overview page
* **When:** the member is enrolled in Autopay
* **Then:** the member should see the enrolled in Autopay card displayed
  * **And** the member should be able to schedule an additional one-time payment
  * **And** the member should not see the Next Payment card

#### Figma

* [Mobile](https://www.figma.com/file/7w17KDWL0nYRdIU7GDKlyM/branch/SAsJCjf0IXqRBuj1lOAbng/%F0%9F%93%90-Achieve%3A-Customer-Dashboard-(Master)?type=design&node-id=4791%3A32199&mode=dev)
* [Desktop](https://www.figma.com/file/7w17KDWL0nYRdIU7GDKlyM/branch/SAsJCjf0IXqRBuj1lOAbng/%F0%9F%93%90-Achieve%3A-Customer-Dashboard-(Master)?type=design&node-id=53626%3A185846&mode=dev)

### Scenario 2: Hide Next Payment Card - One-time Payment Scheduled

* Given: a member is on the Loan Overview page
* When: a member has a one-time payment scheduled for their upcoming payment
  * And: the scheduled payment amount is equal to or greater than the payment due amount
  * And: the scheduled payment is scheduled on or prior to the payment due date
* Then: the member should see the enrolled in scheduled payment card displayed
  * And: the member should be able to schedule an additional one-time payment
  * And: the member should not see the Next Payment card

#### Figma

* [Mobile](https://www.figma.com/file/SAsJCjf0IXqRBuj1lOAbng/Q3-2023-Updates?type=design&node-id=53789-118355&mode=dev)

### Scenario 3: One-time payment scheduled not in full or beyond due date

* Given: a member has a one-time payment scheduled for their upcoming payment
* When: the scheduled payment amount is less than the payment due amount
  * Or the scheduled payment is scheduled after the payment due date
* Then: the member should see the Next Payment card with the remainder of the payment amount due
  * Or the member should continue to see the Next Payment card with the payment due date

### Scenario 4: Manage One-time Payment

* Given: has a one-time payment scheduled
* When: the member clicks manage payment
* Then: the Amount Due displayed in Manage payment drawer should be the amount due for the billing cycle
`;

export const MARKDOWN_01 = {
  title: `FFAM-26602 Remove Redundant`,
  description: `
    **User Statement:** As brand manager, I would like members have a one-time payment scheduled or are enrolled Autopay to not see the next payment card.
    Current layout:
    ![The San Juan Mountains are beautiful!](blob:https://billsdev.atlassian.net/39ff907d-8b4f-451f-9ee9-c91e5e4d36f1#media-blob-url=true&id=8e50ac6d-bb4e-4013-bc86-c28af24ff4aa&collection=&contextId=282945&height=748&width=1084&alt=)
    ![The San Juan Mountains are beautiful!](blob:https://billsdev.atlassian.net/39ff907d-8b4f-451f-9ee9-c91e5e4d36f1#media-blob-url=true&id=8e50ac6d-bb4e-4013-bc86-c28af24ff4aa&collection=&contextId=282945&height=748&width=1084&alt=)
  `,
  Scenarios: [
    {
      title: `Scenario 1: Hide Next Payment Card - Autopay Enrolled`,
      content: `
        **Given:** a member is on the Loan Overview page
        **When:** the member is enrolled in Autopay
        **Then:** the member should see the enrolled in Autopay card displayed
        **And** the member should be able to schedule an additional one-time payment
        **And** the member should not see the Next Payment card
      `,
      resources: `
        * [Mobile](https://www.figma.com/file/7w17KDWL0nYRdIU7GDKlyM/branch/SAsJCjf0IXqRBuj1lOAbng/%F0%9F%93%90-Achieve%3A-Customer-Dashboard-(Master)?type=design&node-id=4791%3A32199&mode=dev)
        * [Desktop](https://www.figma.com/file/7w17KDWL0nYRdIU7GDKlyM/branch/SAsJCjf0IXqRBuj1lOAbng/%F0%9F%93%90-Achieve%3A-Customer-Dashboard-(Master)?type=design&node-id=53626%3A185846&mode=dev)
      `,
    },
    {
      title: `Scenario 1: Hide Next Payment Card - Autopay Enrolled`,
      content: `
        **Given:** a member is on the Loan Overview page
        **When:** the member is enrolled in Autopay
        **Then:** the member should see the enrolled in Autopay card displayed
        **And** the member should be able to schedule an additional one-time payment
        **And** the member should not see the Next Payment card
      `,
    },
  ],
}

export const OLD = `
## Description


## Acceptance Criteria

### Scenario 1: Hide Next Payment Card - Autopay Enrolled

**Given:** a member is on the Loan Overview page
**When:** the member is enrolled in Autopay
**Then:** the member should see the enrolled in Autopay card displayed
**And** the member should be able to schedule an additional one-time payment
**And** the member should not see the Next Payment card

#### Figma

* [Mobile](https://www.figma.com/file/7w17KDWL0nYRdIU7GDKlyM/branch/SAsJCjf0IXqRBuj1lOAbng/%F0%9F%93%90-Achieve%3A-Customer-Dashboard-(Master)?type=design&node-id=4791%3A32199&mode=dev)
* [Desktop](https://www.figma.com/file/7w17KDWL0nYRdIU7GDKlyM/branch/SAsJCjf0IXqRBuj1lOAbng/%F0%9F%93%90-Achieve%3A-Customer-Dashboard-(Master)?type=design&node-id=53626%3A185846&mode=dev)

### Scenario 2: Hide Next Payment Card - One-time Payment Scheduled

Given: a member is on the Loan Overview page
When: a member has a one-time payment scheduled for their upcoming payment
And the scheduled payment amount is equal to or greater than the payment due amount
And the scheduled payment is scheduled on or prior to the payment due date

Then: the member should see the enrolled in scheduled payment card displayed
And the member should be able to schedule an additional one-time payment
And the member should not see the Next Payment card

#### Figma

* [Mobile](https://www.figma.com/file/SAsJCjf0IXqRBuj1lOAbng/Q3-2023-Updates?type=design&node-id=53789-118355&mode=dev)

### Scenario 3: One-time payment scheduled not in full or beyond due date

Given: a member has a one-time payment scheduled for their upcoming payment
When: the scheduled payment amount is less than the payment due amount
Or the scheduled payment is scheduled after the payment due date
Then: the member should see the Next Payment card with the remainder of the payment amount due
Or the member should continue to see the Next Payment card with the payment due date

### Scenario 4: Manage One-time Payment

Given: has a one-time payment scheduled
When: the member clicks manage payment
Then: the Amount Due displayed in Manage payment drawer should be the amount due for the billing cycle

`;
