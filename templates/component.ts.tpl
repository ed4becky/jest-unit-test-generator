import { ComponentFixture, TestBed } from <%=quoteSymbol %>@angular/core/testing<%=quoteSymbol %>;
import { createSpyObj } from <%=quoteSymbol %>jest-createspyobj<%=quoteSymbol %>;
import { <%=name %> } from <%=quoteSymbol %><%=path %><%=quoteSymbol %>;<% 
  imports.forEach(function(value) { %>
import { <%=value.names.join(', ') %> } from <%=value.path %>;<% }) %>

describe(<%=quoteSymbol %><%=name %><%=quoteSymbol %>, () => {
  let <%=instanceVariableName %>: <%=name %>;
  let fixture: ComponentFixture<<%=name %>>;<% 
    declarations.forEach(function(dec) { %>
  let <%=dec.name %>: <%=dec.type %>;<% }) %>

  beforeEach(async () => {<%
    initializers.forEach(function(factory) { %>
    <%=(factory.name ? (factory.name + ' = ') : '') + factory.value%>;<% }) %>

    await TestBed.configureTestingModule({
      declarations: [<%=name %>],
      providers: [<%
      dependencies.forEach(function(dep) { %>
        { provide: <%=dep.token %>, useFactory: () => <%=dep.name%> },<% }) %>
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(<%=name %>);
    <%=instanceVariableName %> = fixture.componentInstance;
  });

  it(<%=quoteSymbol %>should create<%=quoteSymbol %>, () => {
    expect(<%=instanceVariableName %>).toBeTruthy();
  });

<%methods.forEach(function(meth) { %>  describe(<%=quoteSymbol %>METHOD: <%= meth %><%=quoteSymbol %>, () => {
    it(<%=quoteSymbol %>should do something<%=quoteSymbol %>, () => {
      // TODO implement test
      // <%=instanceVariableName %>.<%= meth %>();
    });
  });

<% }) %>});
