<template>
  <article>
    <header><h1>Commercial Property - Add Field</h1></header>
    <main>
      <section>
        <header>
          <h2>Field Types</h2>
          <form>
            <fieldset>
              <div>
                <label for="filter-types">Filter Types</label>
                <input id="filter-types" type="text">
              </div>
            </fieldset>
          </form>
        </header>
        <ul>
          <li>
            <div class="active">
              <h3><i class="icon-spell-check"></i>Text</h3>
              <dl>
                <dt>Definition</dt>
                <dd>String of text</dd>
                <dt>Default Display</dt>
                <dd>Free-form text input</dd>
              </dl>
            </div>
          </li>
          <li>
            <div>
              <h3><i class="icon-calendar"></i>DIV</h3>
              <dl>
                <dt>Definition</dt>
                <dd>Standart ISO Format Date</dd>
                <dt>Default Display</dt>
                <dd>Datepicker, with configurable format</dd>
              </dl>
            </div>
          </li>
          <li>
            <div>
              <h3><i class="icon-truck"></i>VIN</h3>
              <dl>
                <dt>Definition</dt>
                <dd>Vehicle Identification Number</dd>
                <dt>Default Display</dt>
                <dd>Free-form text input</dd>
              </dl>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <header>
          <h2>Field Details</h2>
        </header>
        <form>
          <fieldset>
           <div>
              <label for="display-label">Display Label</label>
              <input id="display-label" type="text" v-on:blur="setReferenceName($event)">
              <small>For display purposes, spaces allowed</small>
            </div>
            <div>
              <label for="reference-name">Reference Name</label>
              <input id="reference-name" type="text" v-model="referenceName" disabled placeholder="Enter Display Label first">
              <small>Used to reference in calculations, no spaces allowed</small>
            </div>
            <div>
              <label for="default-label">Default Label</label>
              <input id="default-label" type="text">
            </div>
            <div>
              <label for="custom-validation">Custom Validation</label>
              <input id="custom-validation" type="text" v-model="customValidation" v-on:keyup="validateInput()" v-bind:class="{'error': validated == false}">
              <small v-bind:class="{'error': validated == false}">Any regex pattern can be used for custom input validation</small>
            </div>
          </fieldset>
          <div>
            <h3>Tags</h3>
          </div>
          <fieldset>
            <div>
              <label>Tag Group</label>
              <ul>
                <li v-for="tag in tags"><a v-on:click="toggleActive(tag.name)"
                                           v-bind:class="{ active: tag.isActive }" href="#">{{tag.name}}</a></li>
              </ul>
            </div>
            <div>
              <label>Tags</label>
              <small class="warning" v-show="!toggled">Select a tag group to see individual tags</small>
              <ul v-for="tag in tags" v-if="tag.isActive">
                <li v-for="individual in tag.individuals"><a href="#">{{individual}}</a></li>
              </ul>
            </div>
          </fieldset>
        </form>
        <aside>
          <header>
            <h3>Field Groups</h3>
            <small >Choose a group for this input</small>
          </header>
          <ul>
            <li v-if="group.name" v-for="group in groups">
              <dl v-on:click="group.isActive = !group.isActive"
                  v-bind:class="{'active': group.isActive}">
                <dt>{{group.name}}</dt>
                <dd>{{group.count}} other inputs</dd>
              </dl>
            </li>
            <li v-else>
              <dl>
                <dd>Enter group name</dd>
                <dd>
                  <input type="text">
                  <footer>
                    <a href="#">ADD</a>
                  </footer>

                </dd>
              </dl>
            </li>
          </ul>
          <footer>
            <a href="#" v-on:click="addNewGroup()">Add A New Group</a>
          </footer>
        </aside>
      </section>
    </main>
    <footer>
      <ul>
        <li><a href="#">Save Changes</a></li>
        <li><a href="#">Cancel Changes</a></li>
        <li><a href="#">Delete Input</a></li>
      </ul>
    </footer>
  </article>
</template>

<script>
  export default {
    name: 'page',
    data() {
      return {
        referenceName: '',
        customValidation: '',
        validated: null,
        tags: [
          { name: 'Vinmaster', individuals: ["vin 1", "vin 2", "vin 3"], isActive: false },
          { name: 'ISO', individuals: ["ISO 1", "ISO 2"], isActive: false },
          { name: 'Tag 3', individuals: ["Tag 4", "Tag 5", "Tag 6", "Tag 7"], isActive: false }
        ],
        groups: [
          {name: 'Rental Vehicle Coverage Package', count: 7, isActive: false }
        ],
        toggled: false,
        index: 0
      }
    },
    methods: {
      setReferenceName: function (event) {
        function camelize(str) {
          return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
          }).replace(/\s+/g, '');
        }

        this.referenceName = camelize(event.target.value.replace(/[^a-z0-9\ ]/gi,''));
      },
      validateInput: function(event) {
        this.validated = /de-->([^<]+).+?en[^>]+>([^<]+)/i.test(this.customValidation);
      },
      toggleActive: function(name) {
        for (let t of this.tags) {
          t.isActive = (t.name == name) ? !t.isActive : false;
          for (let t of this.tags) {
            this.toggled = t.isActive;
            if(this.toggled) {
              break;
            }
          }
        }
      },
      addNewGroup: function() {
        this.groups.push({name: '', count: 0, isActive: false});
      }
    }
  }
</script>
