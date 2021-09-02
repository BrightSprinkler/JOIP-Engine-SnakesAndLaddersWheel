END

            Messages.Add("Congratulations, you explored the maze and successfully gathered all keys!", "#e8da0e", true);
            Messages.Add("I'am responsible of handing out your reward.", "#e8da0e", true);
            Messages.Add("After all you have been through, you sure earned one!", "#e8da0e", true);

            WaitForUserConfirmation("If you are ready, I'll hand out your reward!", hexColor: "#e8da0e");

            Messages.Add("That's sweet!", "#e8da0e", true);
            Messages.Add("So let's start!", "#e8da0e", true);
            Messages.Add("I won't tell you how fast you should stroke ... I think you can decide that yourself.", "#e8da0e", true);
            Messages.Add("It's you choice of course... but I suggest you start fairly slow and get faster over time... if you want to.", "#e8da0e", true);

            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fast,
                    MetronomeDurationInSeconds = 25,
                    PlayMetronomeTimer = false,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            Messages.Add("Oh my, I just love watching you stroke your dick!", "#e8da0e", true);
            Messages.Add("Give me some more strokes please.", "#e8da0e", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fast,
                    MetronomeDurationInSeconds = 30,
                    PlayMetronomeTimer = false,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            Messages.Add("Wow, that was so hot!", "#e8da0e", true);
            Messages.Add("More! Please!", "#e8da0e", true);
            Metronome.StartBpm(120, 30, false, false);
            WaitForMetronome();

            Metronome.StartBpm(200, 500, false);
            Messages.Add("Edge for me!", hexColor: "#e8da0e");
            Modules.GetModule<TaskModule>().Start(Abilities.EdgeOnce.Task);
            if (Modules.GetModule<MazeModule>().IsOver) return;

            Messages.Add("Now that was extremely hot!", "#e8da0e", true);
            Messages.Add("Hmmm...", "#e8da0e", true);
            Sleep(3000);
            Messages.Add("How about you only stroke the head of your dick for a while!", "#e8da0e", true);

            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fast,
                    MetronomeDurationInSeconds = 30,
                    PlayMetronomeTimer = false,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            SlideShow.Show(Properties.Resources.Exit);
            Messages.Add("Keep stroking the head but do it a bit faster now...", "#e8da0e", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fast,
                    MetronomeDurationInSeconds = 20,
                    PlayMetronomeTimer = false,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            Messages.Add("Alright, do you think you can edge from only stroking the tip of your cock?", "#e8da0e", true);
            Modules.GetModule<TaskModule>().Start(Abilities.EdgeOnce.Task);

            Messages.Add("Amazing!", "#e8da0e", true);
            Messages.Add("I don't know if someone told you this before but you have a really beautiful dick...", "#e8da0e", true);
            Messages.Add("I would love to stroke it myself... or to wrap my lips around it...", "#e8da0e", true);
            Messages.Add("Stroke the full length of your cock again.", "#e8da0e", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fast,
                    MetronomeDurationInSeconds = 30,
                    PlayMetronomeTimer = false,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            Messages.Add("Hmm, stroke a bit faster please...", "#e8da0e", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fast,
                    MetronomeDurationInSeconds = 20,
                    PlayMetronomeTimer = false,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            Messages.Add("I want you to edge again.", "#e8da0e", true);
            Messages.Add("And this time, hold the edge.", hexColor: "#e8da0e");

            Modules.GetModule<TaskModule>().Start(Abilities.EdgeOnce.Task);

            SlideShow.Show(Properties.Resources.Exit);
            Messages.Add("Hold it!", "#e8da0e");
            Metronome.StartBpm(120, 15, false, false);
            WaitForMetronome();

            Messages.Add("Beautiful, I don't know who of us enjoys the edging more...", "#e8da0e", true);
            Messages.Add("Okay, I want you to stroke for a full minute next.", "#e8da0e", true);
            Messages.Add("Start slow and increase the stroking pace.", "#e8da0e", true);
            Messages.Add("By the end of the minute I want you to edge.", "#e8da0e", true);
            Modules.GetModule<TaskModule>().Start(new Task()
            {
                Type = TaskType.Stroking,
                TaskParameter = new TaskParameter()
                {
                    MetronomeSpeed = Speed.Fast,
                    MetronomeDurationInSeconds = 60,
                    PlayMetronomeTimer = false,
                    ShowMetronomeProgress = false
                },
                StrokingParameter = new StrokingParameter()
                {
                    Method = StrokingMethod.Normal
                }
            });

            Messages.Add("Edge and hold it!", "#e8da0e");
            Metronome.StartBpm(120, 25, false, false);
            WaitForMetronome();

            Messages.Add("Great, well done!", "#e8da0e", true);
            Messages.Add("You know, I think you're ready to cum for me.", "#e8da0e", true);
            Messages.Add("I'll count down from then and when I reach zero, I want you to blow your load!", "#e8da0e", true);
            Messages.Add("Alright start stroking!", "#e8da0e", true);

            Messages.Add("10", "#e8da0e");
            Metronome.StartBpm(120, 4, false, false);
            WaitForMetronome();
            Messages.Add("9", "#e8da0e");
            Metronome.StartBpm(120, 4, false, false);
            WaitForMetronome();
            SlideShow.Next();
            Messages.Add("8", "#e8da0e");
            Metronome.StartBpm(120, 4, false, false);
            WaitForMetronome();
            Messages.Add("7", "#e8da0e");
            Metronome.StartBpm(120, 4, false, false);
            WaitForMetronome();
            Messages.Add("6", "#e8da0e");
            Metronome.StartBpm(120, 4, false, false);
            WaitForMetronome();
            SlideShow.Next();
            Messages.Add("5", "#e8da0e");
            Messages.Add("You should be stroking fast now!", "#e8da0e");
            Metronome.StartBpm(120, 4, false, false);
            WaitForMetronome();
            Messages.Add("4", "#e8da0e");
            Metronome.StartBpm(120, 4, false, false);
            WaitForMetronome();
            SlideShow.Next();
            Messages.Add("3", "#e8da0e");
            Messages.Add("You are so close to your goal!", "#e8da0e");
            Metronome.StartBpm(120, 4, false, false);
            WaitForMetronome();
            Messages.Add("2", "#e8da0e");
            Messages.Add("Keep going!", "#e8da0e");
            Metronome.StartBpm(120, 4, false, false);
            WaitForMetronome();
            Messages.Add("1", "#e8da0e");
            Messages.Add("Get ready to cum!", "#e8da0e");
            Metronome.StartBpm(120, 4, false, false);
            WaitForMetronome();

            Messages.Add("ZERO! CUM FOR ME!", "#e8da0e", true);
            Messages.Add("Yes! Yes!", "#e8da0e", true);
            Messages.Add("Blow your hot load!", "#e8da0e", true);
            WaitForUserConfirmation("That was amazing!", hexColor: "#e8da0e");
