# jsdoc-cypress-cucumber-plugin

This plugin for JSDoc provides a method for documenting step definitions created for `cypress-cucumber-preprocessor`.

## Usage

The plugin provides new tags: `@step`, `@stepalias`, `@When`, `@Given`, `@Then`

| `@step`      | Let JSDoc know you're documenting a step definition. The other tags rely on this one. |
| `@stepalias` | If you provide more than one expression for the same step, document it with this.     |
| `@When`      | Documents a When expression                                                           |
| `@Given`     | Documents a Given expression                                                          |
| `@Then`      | Documents a Then expression                                                           |

### Example

```js
/**
 * @step
 *
 * @When I scroll to selector
 * @stepalias I scroll to the selector element
 * @stepalias I scroll the selector element into view
 *
 * @summary
 * Scrolls the page until the provided selector is viewable.
 */
When(/^I scroll(?:\sto)?(?:\sthe)? "([^"].*)"(?:\selement\sinto\sview)?/, (selector) => {
  // do something here
})
```

## Installation

1. Install the plugin via npm. Until this goes up to npmjs.com, clone
   the repo and install it locally: `npm install --save
   /path/to/repo/directory`
2. Add the plugin to `.jsdoc.json`.
3. Add something to your template to get things to render.
4. Document your cucumber/cypress invocations

## Template

At the moment, you'll need to add something like the following to your
template. If you're using the default, you can add this to
`container.tmpl`:

```html
 <?js
   var steps = self.find({kind: 'step', memberof: isGlobalPage ? {isUndefined: true} : doc.longname});;
   if (steps && steps.length && steps.forEach) {
 ?>

<h3 class="subsection-title">Step Definitions</h3>
<?js steps.forEach(function(e) { ?>
     <?js
     var stepData = e;
     var self = this;
     ?>

     <div class="step-container">
	 <div class="description">
	     <h5><?js= e.stepKey ?> <?js= e.expression ?></h5>
	     <?js e.stepAliases && e.stepAliases.forEach(function(a) { ?>
	     <p><?js= e.stepKey ?> <?js= a ?></p>
	     <?js }) ?>
	     <p><?js= e.summary ?></p>
	  </div>
     </div>
<?js }); ?>

 <?js } ?>
```
