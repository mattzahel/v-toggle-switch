# Usage

## Simple use

```
<toggle-switch />
```

<Basic v-bind="{ state: false }"/>

## Passing the value and binding event

```
<toggle-switch :value="myValue" @toggle="onToggle" />
```

<Basic />

## Using slots for labels

```
<toggle-switch>
    <template v-slot:label-off>Off</template>
    <template v-slot:label-on>On</template>
    This is an example main label
</toggle-switch>
```

<GuideSlots/>
