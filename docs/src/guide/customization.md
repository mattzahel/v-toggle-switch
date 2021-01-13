# Customization

## Properties

### value

-   Type: `boolean`
-   Default: `false`

### width

Button width in px

-   Type: `number`
-   Default: `50`

### height

Button height in px

-   Type: `number`
-   Default: `24`

### colorOff

Main color when the button is not switched

-   Type: `string`
-   Default: `#C4C4C4`

### colorOn

Main color when the button is switched

-   Type: `string`
-   Default: `#0178D6`

### speed

Transition speed in ms

-   Type: `number`
-   Default: `200`

### disabled

-   Type: `boolean`
-   Default: `false`

### outlineDisabled

Disables default focus outline. Not recommended!

-   Type: `boolean`
-   Default: `false`

## Styles

### buttonStyle

-   Type: `string`
-   Default: `null`

This is how the component looks by default

```
<toggle-switch />
```

<Basic v-bind="{ state: false }"/>

If you don't like default styling, you can always choose one of the following options:

-   `outline`

```
<toggle-switch button-style="outline" />
```

<Outline/>

-   `slider`

```
<toggle-switch v-bind="{ buttonStyle: 'slider' }" />
```

<Slider/>

::: warning
Inner labels (`labelOn`, `labelOff`) don't work with `slider` style yet
:::
