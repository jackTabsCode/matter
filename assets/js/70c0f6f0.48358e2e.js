"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[366],{15038:n=>{n.exports=JSON.parse('{"functions":[{"name":"patch","desc":"```lua\\nfor id, target in world:query(Target) do\\n\\tif shouldChangeTarget(target) then\\n\\t\\tworld:insert(id, target:patch({ -- modify the existing component\\n\\t\\t\\tcurrentTarget = getNewTarget()\\n\\t\\t}))\\n\\tend\\nend\\n```\\n\\nA utility function used to immutably modify an existing component instance. Key/value pairs from the passed table\\nwill override those of the existing component instance.\\n\\nAs all components are immutable and frozen, it is not possible to modify the existing component directly.\\n\\nYou can use the `Matter.None` constant to remove a value from the component instance:\\n\\n```lua\\ntarget:patch({\\n\\tcurrentTarget = Matter.None -- sets currentTarget to nil\\n})\\n```","params":[{"name":"partialNewData","desc":"The table to be merged with the existing component data.","lua_type":"{}"}],"returns":[{"desc":"A copy of the component instance with values from `partialNewData` overriding existing values.","lua_type":"ComponentInstance"}],"function_type":"method","source":{"line":98,"path":"lib/component.lua"}}],"properties":[],"types":[{"name":"ComponentInstance","desc":"The `ComponentInstance` type refers to an actual piece of data that can exist on an entity.\\nThe metatable of the component instance table is set to its particular Component table.\\n\\nA component instance can be created by calling the Component table:\\n\\n```lua\\n-- Component:\\nlocal MyComponent = Matter.component(\\"My component\\")\\n\\n-- component instance:\\nlocal myComponentInstance = MyComponent({\\n\\tsome = \\"data\\"\\n})\\n\\nprint(getmetatable(myComponentInstance) == MyComponent) --\x3e true\\n```","lua_type":"{}","source":{"line":42,"path":"lib/component.lua"}}],"name":"Component","desc":"A component is a named piece of data that exists on an entity.\\nComponents are created and removed in the [World](/api/World).\\n\\nIn the docs, the terms \\"Component\\" and \\"ComponentInstance\\" are used:\\n- **\\"Component\\"** refers to the base class of a specific type of component you\'ve created.\\n\\tThis is what [`Matter.component`](/api/Matter#component) returns.\\n- **\\"Component Instance\\"** refers to an actual piece of data that can exist on an entity.\\n\\tThe metatable of a component instance table is its respective Component table.\\n\\nComponent instances are *plain-old data*: they do not contain behaviors or methods.\\n\\nSince component instances are immutable, one helper function exists on all component instances, `patch`,\\nwhich allows reusing data from an existing component instance to make up for the ergonomic loss of mutations.","source":{"line":20,"path":"lib/component.lua"}}')}}]);