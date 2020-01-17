import React from "react"
import { storiesOf } from "@storybook/react"

import Example from "."

const stories = storiesOf("Example", module)

stories.add("Default", () => <Example />)
