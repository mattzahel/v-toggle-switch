## Customization

### value

-   Type: `boolean`
-   Default: `false`

### width

Changes button width (in px)

-   Type: `number`
-   Default: `50`

### height

Changes button height (in px)

-   Type: `number`
-   Default: `24`

### colorOff

Changes main color when the button is not switched

-   Type: `string`
-   Default: `#C4C4C4`

### colorOn

Changes main color when the button is switched

-   Type: `string`
-   Default: `#0178D6`

### disabled

-   Type: `boolean`
-   Default: `false`

### outlineDisabled

Disables default focus outline. Not recommended!

-   Type: `boolean`
-   Default: `false`

## Component Styles

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
