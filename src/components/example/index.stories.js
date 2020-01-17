import React from "react"
import { storiesOf } from "@storybook/react"

import ExampleComponent from "."

const stories = storiesOf("Example", module)

stories.add("Default", () => <ExampleComponent />)
