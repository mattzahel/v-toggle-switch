# Introduction

## **Work In Progress!**

The [v-toggle-switch ](https://www.npmjs.com/package/v-toggle-switch) is highly configurable, compliant with accessibility standards and minimalistic component!
It works nice with Vue 2.

<Basic/>

## Install

Use `npm install v-toggle-switch` or `yarn add v-toggle-switch`

### Import

-   locally

```
import ToggleSwitch from 'v-toggle-switch'

export default {
    components: {
        ToggleSwitch
    }
}
```

-   or globally

```
import ToggleSwitch from 'v-toggle-switch'

Vue.use(ToggleSwitch)
```

## Usage

### Simple

```
<toggle-switch />
```

<Basic v-bind="{ state: false }"/>

### Passing the value and binding toggle event

```
<toggle-switch :value="myValue" @toggle="onToggle" />
```

<Basic />

### Using slots for labels

```
<toggle-switch>
    <template v-slot:label-off>Off</template>
    <template v-slot:label-on>On</template>
    This is an example main label
</toggle-switch>
```

<GuideSlots/>

### Choosing a different style

```
<toggle-switch button-style="outline" />
```

<Outline/>
