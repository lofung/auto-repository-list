import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [list, setList] = useState([
    {address:"01_expanding_cards_and_main", date:"2020-12-23"},
    {address:"02_progress_steps", date:"2020-12-23"},
    {address:"03_rotating_navigation", date:"2020-12-16"},
    {address:"04_Hidden_Search_Widget", date:"2020-12-17"},
    {address:"05_blurry_page_loading", date:"2020-12-23"},
    {address:"06_scroll_animation", date:"2020-12-23"},
    {address:"07_split_landing_page", date:"2020-12-23"},
    {address:"08_login_form", date:"2020-12-23"},
    {address:"09_soundboard", date:"2020-12-23"},
    {address:"10_dad_jokes", date:"2020-12-23"},
    {address:"11_event_keycodes", date:"2020-12-27"},
    {address:"12_faq_collasper", date:"2021-1-4"},
    {address:"13_random_choice_UI", date:"2021-1-5"},
    {address:"14_animated_navigation", date:"2021-1-6"},
    {address:"15_increment_counter", date:"2021-1-7"},
    {address:"16_glass_filling github", date:"2021-1-8"},
    {address:"17_movie_frontend", date:"2021-1-9"},
    {address:"18_background_slider", date:"2021-1-10"},
    {address:"19_javascript_clock", date:"2021-1-11"},
    {address:"20_button_ripple_effect", date:"2021-1-12"},
    {address:"21_drag_and_drop", date:"2021-1-13"},
    {address:"22_drawing_app", date:"2021-1-14"},
    {address:"23_animated_loader", date:"2021-1-15"},
    {address:"24_content_placeholder", date:"2021-1-16"},
    {address:"25_stick_navbar", date:"2021-1-17"},
    {address:"26_vertical_slider", date:"2021-1-18"},
    {address:"27_toast_notification", date:"2021-1-19"},
    {address:"28_github_user_API", date:"2021-1-20"},
    {address:"29_double_click_like_count", date:"2021-1-21"},
    {address:"30_animated_text", date:"2021-1-22"},
    {address:"31_password_generator", date:"2021-1-23"},
    {address:"32_animated_buttons", date:"2021-1-24"},
    {address:"33_notes_app", date:"2021-1-25"},
    {address:"34_animated_countdown", date:"2021-1-26"},
    {address:"35_image_carousell", date:"2021-1-27"},
    {address:"12ainfinite_scrolling", date:"2021-1-28"},
    {address:"", date:"2021-1-XX"},

  ]);

  useEffect(() => {
    console.log("hello world!")}, []);

  return (
    <div className="App">
      <h3>List of small gadget projects</h3>
      <h4>This page is currently made in simple mode. It would be updated to a modern frontend when there is more time.</h4>
      {/* list */}
      <span><a href="https://github.com/lofung/40-days-project-javascript/">github</a></span>

      <table>
        <thead>
          <tr>
            <td>Index</td>
            <td>Repository Name</td>
            <td>Last Update Date</td>
           </tr>
        </thead>
        <tbody>
          {list.map((entry, idx) => 
          <tr>
            <td>{idx+1} </td>
            <td><a href={"http://lofung.github.io/40-days-project-javascript/" + entry.address + "/index.html"} key={idx+ "abc"}>{entry.address.slice(3).replace("_", " ")}</a></td>
            <td>{entry.date}</td>
          </tr>
        )}
        </tbody>
      </table>

      <h6>This page is rendered by simple react/hook pulling an github API of repository.</h6>
      <h6><a href="https://old.reddit.com/r/learnjavascript/comments/ke8b5p/getting_an_array_of_all_github_repository_that/gg19r7u/?context=3">source</a></h6>

    </div>
  );
}

export default App;
