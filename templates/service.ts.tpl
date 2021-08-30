import { TestBed } from <%=quoteSymbol %>@angular/core/testing<%=quoteSymbol %>;
import { createSpyObj } from <%=quoteSymbol %>jest-createspyobj<%=quoteSymbol %>;
import { <%=name %> } from <%=quoteSymbol %><%=path %><%=quoteSymbol %>;<%
  imports.forEach(function(value) { %>
import { <%=value.names.join(', ') %> } from <%=value.path %>;<% }) %>

describe(<%=quoteSymbol %><%=name %><%=quoteSymbol %>, () => {
  let <%=instanceVariableName %>: <%=name %>;<%
    declarations.forEach(function(dec) { %>
  let <%=dec.name %>: <%=dec.type %>;<% }) %>

  beforeEach(async () => {<%
    initializers.forEach(function(factory) { %>
    <%=(factory.name ? (factory.name + ' = ') : '') + factory.value%>;<% }) %>

    await TestBed.configureTestingModule({
      providers: [<%
      dependencies.forEach(function(dep) { %>
        { provide: <%=dep.token %>, <%=(dep.isObj?'useValue: ':'useFactory: () => ') + dep.name%> },<% }) %>
        <%=name %>
      ]
    });
    service = TestBed.inject(<%=name %>);
  });

  it(<%=quoteSymbol %>should create<%=quoteSymbol %>, () => {
    expect(<%=instanceVariableName %>).toBeTruthy();
  });

<%methods.forEach(function(meth) { %>  describe(<%=quoteSymbol %>METHOD: <%= meth %><%=quoteSymbol %>, () => {
    it.skip(<%=quoteSymbol %>NOT IMPLEMENTED: should do something<%=quoteSymbol %>, () => {
      // TODO implement test
      // <%=instanceVariableName %>.<%= meth %>();
    });
  });

<% }) %>});
