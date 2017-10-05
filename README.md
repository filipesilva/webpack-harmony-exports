# webpack-harmony-exports

This repo shows how harmony exports affects the webpack `applyPluginsBailResult1` phase.

Having more harmony exports increases the time this phase takes on rebuilds.

To see this there are two precompiled Angular applications: one in JIT mode and one in AOT mode.
In Angular, AOT mode generates more files than JIT mode. These files contain more harmony exports.

As these applications are already compiled, the webpack configuration doesn't contain any loaders.
It just bundles JS files contained in `out-jit` and `out-aot`.

`debug-jit.cpuprofile` and `debug-aot.cpuprofile` contain CPU profiles for JIT and AOT respectively.
Each CPU profile contains 2 rebuilds. See below as to how you can load it.
By zooming in and putting your mouse over the CPU profile into the `applyPluginsBailResult1`
phase (under `seal`), you can see how much time it takes.

The JIT application rebuild spends `70.5`/`66.0` ms in this phase, whereas the AOT application takes 
`253`/`200.1` ms. Larger applications spend more time in this phase, even on rebuilds where no
import or export was altered.

## Installing and running the applications

- `npm install`
- `npm run serve-jit` for the JIT application, or `serve-aot` for the AOT application.

## Capturing and loading CPU profiles

- open `chrome://inspect/#devices` in chrome
- click `Open dedicated DevTools for Node`
- in the `Profiler` tab you can load existing CPU profiles
- `npm run debug-jit` for the JIT application, or `debug-aot` for the AOT application.
- trigger a rebuild by adding a code change (like `console.log(1);`) to `out-jit/main.jit.js` for 
JIT or `out-aot/src/main.aot.js` for AOT.
- to record a profile, go to the `Profiler` tab and click `Start`, trigger a few rebuilds, 
then click `Stop`, then click the profile on the left to see it.
